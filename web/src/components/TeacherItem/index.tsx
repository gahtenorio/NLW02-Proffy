import React from 'react';
import api from '../../services/api';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface teacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
