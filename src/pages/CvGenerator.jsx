import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  ImageRun,
} from "docx";
import { saveAs } from "file-saver";

const CvGenerator = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Nama Lengkap",
    email: "email@example.com",
    phone: "08123456789",
    linkedin: "linkedin.com/in/namaanda",
    summary: "Ringkasan profesional Anda di sini.",
  });

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Posisi Anda",
      company: "Nama Perusahaan",
      startDate: "Bulan Tahun",
      endDate: "Bulan Tahun",
      description: "Deskripsi pekerjaan Anda.",
    },
  ]);

  const [educations, setEducations] = useState([
    {
      id: 1,
      degree: "Gelar Anda",
      school: "Nama Universitas",
      startDate: "Bulan Tahun",
      endDate: "Bulan Tahun",
      description: "Deskripsi singkat pendidikan Anda.",
    },
  ]);

  const [skills, setSkills] = useState("HTML, CSS, JavaScript, React");
  const [photo, setPhoto] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // input handlers
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp))
    );
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setEducations((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [name]: value } : edu))
    );
  };

  const addExperience = () => {
    setExperiences((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (id) =>
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));

  const addEducation = () => {
    setEducations((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        degree: "",
        school: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeEducation = (id) =>
    setEducations((prev) => prev.filter((edu) => edu.id !== id));

  // upload foto
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // download PDF
  const handleDownloadPDF = () => {
    const input = document.getElementById("cv-preview");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("CV.pdf");
    });
  };

  // download Word
  const handleDownloadWord = async () => {
    const children = [];

    // foto profil
    if (photo) {
      children.push(
        new Paragraph({
          children: [
            new ImageRun({
              data: Buffer.from(photo.split(",")[1], "base64"),
              transformation: { width: 100, height: 100 },
            }),
          ],
        })
      );
    }

    // nama & kontak
    children.push(
      new Paragraph({
        text: personalInfo.name,
        heading: HeadingLevel.HEADING1,
      }),
      new Paragraph(personalInfo.email),
      new Paragraph(personalInfo.phone),
      new Paragraph(personalInfo.linkedin),
      new Paragraph({ text: personalInfo.summary, spacing: { after: 200 } })
    );

    // pengalaman
    children.push(
      new Paragraph({
        text: "Pengalaman Kerja",
        heading: HeadingLevel.HEADING2,
      })
    );
    experiences.forEach((exp) => {
      children.push(
        new Paragraph({ text: `${exp.title} - ${exp.company}` }),
        new Paragraph({ text: `${exp.startDate} - ${exp.endDate}` }),
        new Paragraph(exp.description)
      );
    });

    // pendidikan
    children.push(
      new Paragraph({ text: "Pendidikan", heading: HeadingLevel.HEADING2 })
    );
    educations.forEach((edu) => {
      children.push(
        new Paragraph({ text: `${edu.degree} - ${edu.school}` }),
        new Paragraph({ text: `${edu.startDate} - ${edu.endDate}` }),
        new Paragraph(edu.description)
      );
    });

    // skills
    children.push(
      new Paragraph({ text: "Keterampilan", heading: HeadingLevel.HEADING2 })
    );
    children.push(new Paragraph(skills));

    const doc = new Document({ sections: [{ children }] });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "CV.docx");
  };

  return (
    <div className="main-container">
      <style>{`
        body { font-family: 'Segoe UI', sans-serif; }
        .main-container {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          min-height: 100vh;
          background: #f0f2f5;
          transition: background 0.3s, color 0.3s;
        }
        .dark .main-container { background: #121212; color: #e5e5e5; }
        .input-section, .preview-section {
          padding: 1rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          margin: 0.5rem;
          overflow-y: auto;
        }
        .dark .input-section, .dark .preview-section { background: #1e1e1e; }
        @media (min-width: 1024px) {
          .main-container { flex-direction: row; }
          .input-section, .preview-section { width: 50%; }
        }
        h1 { font-size: 1.8rem; margin-bottom: 1rem; }
        .section-title { font-size: 1.2rem; font-weight: 600; margin-top: 1rem; }
        input, textarea {
          width: 100%; padding: 0.6rem;
          margin-bottom: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .dark input, .dark textarea { background: #2b2b2b; color: #eee; border-color: #444; }
        button {
          cursor: pointer; padding: 0.6rem 1rem;
          border: none; border-radius: 8px;
          margin: 0.2rem;
        }
        .btn { background: #6366f1; color: white; }
        .btn:hover { background: #4f46e5; }
        .remove-btn { background: #ef4444; color: white; }
        .download-btn {
          position: fixed; bottom: 1rem; right: 1rem;
          border-radius: 50%; padding: 1rem; background: #22c55e; color: white;
        }
        .download-btn:hover { background: #16a34a; }
      `}</style>

      {/* Input Section */}
      <div className="input-section">
        <h1>CV Generator</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="btn">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Foto */}
        <div>
          <label>Foto Profil:</label>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>

        {/* Informasi Pribadi */}
        <h2 className="section-title">Informasi Pribadi</h2>
        <input
          name="name"
          value={personalInfo.name}
          onChange={handlePersonalInfoChange}
          placeholder="Nama"
        />
        <input
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={personalInfo.phone}
          onChange={handlePersonalInfoChange}
          placeholder="Telepon"
        />
        <input
          name="linkedin"
          value={personalInfo.linkedin}
          onChange={handlePersonalInfoChange}
          placeholder="LinkedIn"
        />
        <textarea
          name="summary"
          value={personalInfo.summary}
          onChange={handlePersonalInfoChange}
          placeholder="Ringkasan"
        />

        {/* Pengalaman */}
        <h2 className="section-title">Pengalaman</h2>
        <button onClick={addExperience} className="btn">
          Tambah
        </button>
        {experiences.map((exp) => (
          <div key={exp.id}>
            <button
              onClick={() => removeExperience(exp.id)}
              className="remove-btn"
            >
              Hapus
            </button>
            <input
              name="title"
              value={exp.title}
              onChange={(e) => handleExperienceChange(e, exp.id)}
              placeholder="Posisi"
            />
            <input
              name="company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(e, exp.id)}
              placeholder="Perusahaan"
            />
            <input
              name="startDate"
              value={exp.startDate}
              onChange={(e) => handleExperienceChange(e, exp.id)}
              placeholder="Mulai"
            />
            <input
              name="endDate"
              value={exp.endDate}
              onChange={(e) => handleExperienceChange(e, exp.id)}
              placeholder="Selesai"
            />
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(e, exp.id)}
              placeholder="Deskripsi"
            />
          </div>
        ))}

        {/* Pendidikan */}
        <h2 className="section-title">Pendidikan</h2>
        <button onClick={addEducation} className="btn">
          Tambah
        </button>
        {educations.map((edu) => (
          <div key={edu.id}>
            <button
              onClick={() => removeEducation(edu.id)}
              className="remove-btn"
            >
              Hapus
            </button>
            <input
              name="degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(e, edu.id)}
              placeholder="Gelar"
            />
            <input
              name="school"
              value={edu.school}
              onChange={(e) => handleEducationChange(e, edu.id)}
              placeholder="Sekolah"
            />
            <input
              name="startDate"
              value={edu.startDate}
              onChange={(e) => handleEducationChange(e, edu.id)}
              placeholder="Mulai"
            />
            <input
              name="endDate"
              value={edu.endDate}
              onChange={(e) => handleEducationChange(e, edu.id)}
              placeholder="Selesai"
            />
            <textarea
              name="description"
              value={edu.description}
              onChange={(e) => handleEducationChange(e, edu.id)}
              placeholder="Deskripsi"
            />
          </div>
        ))}

        {/* Skills */}
        <h2 className="section-title">Keterampilan</h2>
        <textarea
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Pisahkan dengan koma"
        />
      </div>

      {/* Preview */}
      <div className="preview-section" id="cv-preview">
        {photo && (
          <img
            src={photo}
            alt="foto"
            style={{
              width: "100px",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
        )}
        <h2>{personalInfo.name}</h2>
        <p>
          {personalInfo.email} | {personalInfo.phone} | {personalInfo.linkedin}
        </p>
        <p>{personalInfo.summary}</p>

        <h3>Pengalaman</h3>
        {experiences.map((exp) => (
          <div key={exp.id}>
            <strong>{exp.title}</strong> - {exp.company} ({exp.startDate} -{" "}
            {exp.endDate})<p>{exp.description}</p>
          </div>
        ))}

        <h3>Pendidikan</h3>
        {educations.map((edu) => (
          <div key={edu.id}>
            <strong>{edu.degree}</strong> - {edu.school} ({edu.startDate} -{" "}
            {edu.endDate})<p>{edu.description}</p>
          </div>
        ))}

        <h3>Keterampilan</h3>
        <ul>
          {skills.split(",").map((skill, i) => (
            <li key={i}>{skill.trim()}</li>
          ))}
        </ul>
      </div>

      {/* Tombol download */}
      <button onClick={handleDownloadPDF} className="download-btn">
        PDF
      </button>
      <button
        onClick={handleDownloadWord}
        className="download-btn"
        style={{ right: "5rem", background: "#3b82f6" }}
      >
        Word
      </button>
    </div>
  );
};

export default CvGenerator;
