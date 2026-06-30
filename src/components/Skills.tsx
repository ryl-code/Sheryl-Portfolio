import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Database, Shield, Wrench, Eye, Info, Brain, Users, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import { SKILLS, PERSONAL_INFO } from '../data';
import { Skill } from '../types';
import PageNavigation from './PageNavigation';

// Custom designed premium SVG logo brand icons for Languages, Databases, Cyber Security and Tools
const GitLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.612 11.386L11.39 2.611a1.233 1.233 0 011.745 0l8.252 8.249a1.233 1.233 0 010 1.746l-8.775 8.775a1.233 1.233 0 01-1.744 0L2.612 13.13a1.232 1.232 0 010-1.744z" fill="#F05032" />
    <path d="M10.84 15.023a1.502 1.502 0 11-1.492-1.503c.334 0 .647.108.905.293l1.866-1.864v-3.037a1.503 1.503 0 11.963 0V11.23l1.871 1.87a1.503 1.503 0 11-.681.68l-1.821-1.822-1.605 1.605c.101.18.156.386.156.603a1.49 1.49 0 01-.161.696z" fill="#FFF" />
  </svg>
);

const GitHubLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const VSCodeLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.1 6.3L15.3 0.5C14.7 0 13.9.3 13.9 1V5.2L7.3 10.2L1.5 5.8C1 5.4.3 5.5.1 6.1C0 6.4 0 6.6.1 6.8L5.7 12L0.1 17.2C0 17.4 0 17.6.1 17.9C.3 18.5 1 18.6 1.5 18.2L7.3 13.8L13.9 18.8v4.2c0 .7.8 1 1.4.5l7.8-5.8c.4-.3.6-.8.6-1.3V7.6c0-.5-.2-1-.6-1.3z" fill="#007ACC" />
    <path d="M13.9 5.2L7.3 10.2L1.5 5.8C1 5.4.3 5.5.1 6.1C0 6.4 0 6.6.1 6.8L5.7 12L13.9 5.2z" fill="#1F9CF0" />
    <path d="M13.9 18.8L7.3 13.8L5.7 12L0.1 17.2C0 17.4 0 17.6.1 17.9C.3 18.5 1 18.6 1.5 18.2L13.9 18.8z" fill="#0065A9" />
    <path d="M23.1 6.3L15.3 0.5C14.7 0 13.9.3 13.9 1V18.8L23.1 12c.4-.3.6-.8.6-1.3V7.6c0-.5-.2-1-.6-1.3z" fill="#005A9E" />
  </svg>
);

const NetBeansLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L2 6.8v11.4L12 23l10-5.8V6.8L12 1z" fill="#1E40AF" />
    <path d="M12 1v11L2 6.8 12 1z" fill="#3B82F6" />
    <path d="M12 12l10-5.2-10-5.8V12z" fill="#60A5FA" />
    <path d="M12 12v11l10-5.8-10-5.2z" fill="#F97316" />
    <path d="M12 12l-10-5.2v10.4l10 5.8V12z" fill="#FB923C" />
  </svg>
);

const AndroidStudioLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" />
    <line x1="12" y1="1" x2="12" y2="23" stroke="#0369A1" strokeWidth="0.5" strokeDasharray="2 2" />
    <line x1="1" y1="12" x2="23" y2="12" stroke="#0369A1" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M7 16a5 5 0 0110 0" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="10" cy="14.5" r="0.8" fill="#FFF" />
    <circle cx="14" cy="14.5" r="0.8" fill="#FFF" />
    <line x1="9" y1="12.5" x2="7.5" y2="10.5" stroke="#34D399" strokeWidth="1" strokeLinecap="round" />
    <line x1="15" y1="12.5" x2="16.5" y2="10.5" stroke="#34D399" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const DockerLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.5" y="4" width="2.5" height="2" rx="0.3" fill="#38BDF8" />
    <rect x="8.5" y="4" width="2.5" height="2" rx="0.3" fill="#0EA5E9" />
    <rect x="11.5" y="4" width="2.5" height="2" rx="0.3" fill="#0284C7" />
    <rect x="4" y="6.5" width="2.5" height="2" rx="0.3" fill="#01A3EE" />
    <rect x="7" y="6.5" width="2.5" height="2" rx="0.3" fill="#1D4ED8" />
    <rect x="10" y="6.5" width="2.5" height="2" rx="0.3" fill="#1D4ED8" />
    <rect x="13" y="6.5" width="2.5" height="2" rx="0.3" fill="#2496ED" />
    <path d="M2.5 13.5c1.5 1.5 5 2.5 9.5 2.5 4.5 0 9-2 10.5-5.5.2-.5 0-1-.5-1.2-.5-.2-1 .1-1.2.5-.8 1.8-3.5 3.2-8.3 3.2C6 13 3.5 11.5 3.5 10c0-.5-.5-.8-1-.8s-1 .3-1 .8c0 1.2.3 2.5 1 3.5zm20-5.5c.3 0 .5-.2 .5-.5V6.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1c0 .3.2.5.5.5z" fill="#2496ED" />
  </svg>
);

const AutopsyLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7" stroke="#94A3B8" strokeWidth="1.5" fill="#475569" fillOpacity="0.2" />
    <line x1="15" y1="15" x2="22" y2="22" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M7 10.5l2-3 2 1.5 2.5-3 2.5 4.5h-9z" fill="#F59E0B" />
    <circle cx="9" cy="9.5" r="0.6" fill="#FFF" />
  </svg>
);

const CplusplusLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" fill="#005999" />
    <path d="M11 15.5H9.5c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5H11c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5H9.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H11c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z" fill="#FFF" />
    <path d="M14.5 11.5v-1.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1.5h1.5c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-1.5V15c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1.5h-1.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1.5z" fill="#FFF" />
    <path d="M19 8.5V7c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1.5h1.5c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-1.5V12c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1.5h-1.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5H19z" fill="#FFF" />
  </svg>
);

const JavaLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6 20.3c-2.4 0-4.6-.3-6-.9-.3-.1-.5-.4-.4-.7.1-.3.4-.5.7-.4 1.3.5 3.3.8 5.6.8 2.6 0 5-.4 6.3-1.1.3-.1.6.1.7.4.1.3-.1.6-.4.7-1.4.8-4 1.2-6.5 1.2zM12.3 22.8c-2.7 0-5.3-.4-6.9-1-.3-.1-.5-.4-.4-.7.1-.3.4-.5.7-.4 1.4.5 3.9.9 6.5.9 2.8 0 5.4-.4 6.9-1.1.3-.1.6 0 .7.3s-.1.6-.4.7c-1.5.8-4.2 1.3-7 1.3z" fill="#007396" />
    <path d="M17.5 10c.8-.5 1.4-1.2 1.6-2-.2-.7.1-1.3-.4-1.6-.6-.4-1.5-.1-2.4.6-.3-.6-.7-1.1-1.2-1.6-.3-.3-.7-.6-1.1-.9L14 4.5l-1.3.4C8 6.5 6.7 9.8 7.3 12.5c.3 1.3 1 2.4 1.9 3.1 1 .8 2.3 1.2 3.7 1.2.6 0 1.2-.1 1.8-.2.7-.1 1.3-.3 2-.6.7-.3 1.3-.7 1.8-1.2.5-.5 1-1.2 1.1-1.9.1-.8-.1-1.6-.8-2.1-.4-.3-.9-.6-1.3-.8zm-4.7 5.7c-1.2 0-2.3-.4-3-1.1s-1.1-1.8-1.3-3c-.4-2-.2-4.1.6-5.8 2.1 1.7 4.1 3.8 5.6 6.1.4.6.7 1.3.9 2a6.4 6.4 0 01-2.8 1.8zm3.2-3.8c-.8-1.1-1.7-2.1-2.6-3 1.5-.7 2.7-.9 3.3-.5.4.3.4.7.1 1.2-.2.5-.5.9-.8 2.3z" fill="#ED8B00" />
    <path d="M14.5 0c-.3 0-.6.2-.7.5-.1.8-.4 1.5-.9 2.2-.2.3-.1.6.2.8.3.2.6.1.8-.2.6-.8.9-1.7 1.1-2.6 0-.3-.2-.6-.5-.7zm-1.8 1.5c-.3.1-.4.4-.3.7.1.5.2 1 .3 1.5.1.3.4.5.7.4.3-.1.5-.4.4-.7l-.3-1.6c-.1-.2-.4-.4-.8-.3z" fill="#ED8B00" />
  </svg>
);

const PHPLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
    <ellipse cx="12" cy="12" rx="9" ry="5" fill="#4F5B93" />
    <path d="M6.5 13.5V9.5h1.8c.8 0 1.2.3 1.2.9s-.4 1-1.2 1H7.5v2.1H6.5zm1-3.1v1h.7c.3 0 .5-.1.5-.5s-.2-.5-.5-.5h-.7zM11 13.5V9.5h1v1.6H13V9.5h1v4h-1v-1.5h-1v1.5H11zm5 0V9.5h1.8c.8 0 1.2.3 1.2.9s-.4 1-1.2 1h-.8v2.1H16zm1-3.1v1h.7c.3 0 .5-.1.5-.5s-.2-.5-.5-.5h-.7z" fill="#FFF" />
  </svg>
);

const JavaScriptLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M12 17.5c.3.5.7.9 1.3 1.1c.5.2 1.1.3 1.7.1c.6-.2 1-.6 1.1-1.2c.2-.9-.3-1.4-1.3-1.8L14 15.3c-1.3-.5-2-1.3-1.8-2.6c.1-1.2.9-2.1 2.2-2.4c1.3-.3 2.5.1 3.2 1.1l-1.3.9c-.4-.5-.9-.8-1.5-.7c-.6.1-.9.5-1 1s.4 1.1 1.2 1.4l.8.3c1.5.6 2.2 1.3 2 2.8c-.2 1.4-1.4 2.4-2.9 2.5c-1.6.1-3-.7-3.6-1.9l1.2-.8zM5 10.3h1.6v6c-.1.7-.5 1.2-1.2 1.3c-.5 0-.9-.3-1-.7l-1.3.6c.3.9 1 1.4 2 1.4c1.6-.1 2.7-1.1 2.8-2.7v-6h1.7V9H5v1.3z" fill="#000" />
  </svg>
);

const NodejsLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.6v9.2L12 20.4l8-4.6V6.6L12 2zm1-2.9L22 6.1v11.8l-9 5.2-9-5.2V6.1l9-5.2z" fill="#339933" />
    <path d="M12 5.5L6.5 8.7v6.6l5.5 3.2 5.5-3.2V8.7L12 5.5zm1 2.2l3.5 2V14.3l-3.5 2v-8.6z" fill="#339933" />
  </svg>
);

const SQLLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="7" rx="9" ry="4" fill="#00758F" />
    <path d="M3 7v5c0 2 4 4 9 4s9-2 9-4V7C21 9 17 11 12 11S3 9 3 7z" fill="#F29111" />
    <path d="M3 12v5c0 2 4 4 9 4s9-2 9-4v-5c0 2-4 4-9 4s-9-2-9-4z" fill="#00758F" />
  </svg>
);

const CyberSecurityLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6v6c0 5.5 3.5 10.2 9 12 5.5-1.8 9-6.5 9-12V6l-9-4z" fill="#1E3A8A" />
    <path d="M12 6a3 3 0 00-3 3c0.1 1.1.7 2 1.5 2.5L9.5 15h5l-1-3.5c.8-.5 1.4-1.4 1.5-2.5a3 3 0 00-3-3z" fill="#FFF" />
  </svg>
);

const LaravelLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.015.5l-9.155 4.88L.55 17.513l11.465 5.987 11.435-5.987-2.31-12.133L12.015.5z" fill="#F05340"/>
    <path d="M12.015 1.765v20.407l10.12-5.29-2.03-10.665-8.09-4.452z" fill="#FF2D20"/>
    <path d="M6.545 13.91l6.195 3.325V7.476L6.545 4.15v9.76z" fill="#F05340"/>
    <path d="M6.545 13.91v-9.76L11.513 6.9v9.117L6.545 13.91z" fill="#CB2027"/>
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.964 1.547c-5.183 0-4.996 2.247-4.996 2.247l-.009 2.378h5.116v.725H6.848c-3.411 0-3.568 2.302-3.568 2.302s-.175 3.336 0 4.707c.159 1.258 1.053 1.348 1.053 1.348h2.396v-3.424s-.044-1.99 2.012-1.99h5.101s1.956-.051 1.956-2.03V5.518s.22-3.97-3.834-3.97zm-1.847 1.53a.901.901 0 110 1.802.901.901 0 010-1.802zm7.042 3.864v3.425s.044 1.99-2.012 1.99H9.95s-1.956.05-1.956 2.03v2.292s-.22 3.971 3.834 3.971c5.183 0 4.996-2.247 4.996-2.247l.009-2.377h-5.116v-.726h5.226c3.411 0 3.568-2.302 3.568-2.302s.175-3.336 0-4.707c-.159-1.258-1.053-1.348-1.053-1.348h-2.396zm-3.313 7.643a.901.901 0 110 1.803.901.901 0 010-1.803z" fill="#3776AB"/>
  </svg>
);

const UbuntuLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0a12 12 0 00-11.23 7.8A4.14 4.14 0 014.28 12a4.13 4.13 0 01-3.5 4.2 12 12 0 0011.22 7.8 12 12 0 009.68-19.1A3.75 3.75 0 0118.8 6.4c-1.3-.92-3.1-.64-4 .67a4.14 4.14 0 00-6.19 6.27 3.75 3.75 0 01-2.9-6.01 4.14 4.14 0 006.29-6.23zm6.8 6.4a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-14.5 7.85a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM18.8 19.85a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill="#E95420"/>
  </svg>
);

const FirebaseLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.672L6.155 1.542a.562.562 0 011.02-.194l2.585 4.908-5.87 9.416z" fill="#FFC24A"/>
    <path d="M11.956 7.876l2.184-4.522a.56.56 0 011.002 0l8.031 16.591-9.92 5.568a1.69 1.69 0 01-1.631 0L.938 19.46 11.956 7.876z" fill="#FFA000"/>
    <path d="M12.016 11.396l-2.253-2.254-5.87 9.416 8.123-7.162z" fill="#F6820C"/>
  </svg>
);

const SupabaseLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.362 10.373a1.455 1.455 0 0 0-1.11-2.37h-7.654V1.821a1.455 1.455 0 0 0-2.483-1.03l-7.48 7.48a1.455 1.455 0 0 0 1.03 2.483h7.655v6.183a1.455 1.455 0 0 0 2.483 1.028l7.478-7.48a1.455 1.455 0 0 0 .081-2.112z" fill="#3ECF8E"/>
  </svg>
);

const KaliLinuxLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.076 2.473c1.365.234 2.11.91 2.378 2.052.27 1.134.192 1.838-.415 2.705-.286.415-1.127.846-1.503.74-.296-.084-.52-.614-.52-.89 0-.256-.474-.827-.723-.844a23.957 23.957 0 0 0-.27 1.826c-.198 1.954-.04 2.802.733 3.993.424.654 1.157 1.436 1.442 1.62.247.16 2.24.493 2.76.452.333-.025-.5.717-.98.868-1.7.533-3.056.405-4.484-.44-2.822-1.67-4.14-4.82-3.213-7.66.702-2.146 2.38-3.9 4.803-4.42zm2.083 6.945c.42.02.668.21.905.7.126.262.348.643.513.882.268.39.317.587.352 1.345.034.735 0 1.027-.247 1.955-.177.67-.323 1.258-.328 1.32-.008.083.565-.63 1.11-.144.385.344.475.696.536 2.112.046 1.037.043 1.06-.118 1.332-.236.4-1.222.846-2.072.936-2.455.263-4.526-.816-5.836-3.045-.632-1.077-1.162-2.853-.948-3.178.1-.15.4.156.467.472.067.31-.082 1.862.116 2.585.345 1.25 1.127 2.378 2.227 3.208 1.488 1.122 3.197 1.472 4.876 1.004a3.864 3.864 0 0 0 2.203-1.666c.552-.898.706-1.58.583-2.587-.043-.346-.107-.487-.282-.622-.26-.198-.38-.073-.6.637-.168.536-.457 1.04-.668 1.167-.354.214-1.12.02-1.4-.256-.472-.468-.198-1.554.495-1.957.252-.146.282-.24.168-.535-.246-.63-.385-.688-1.425-.584-.666.066-1.582.4-2.152.784-.218.146-.388.225-.373.167.017-.06 1.173-1.614 1.365-1.836.438-.507 1.3-1.378 1.41-1.424.08-.035.14-.183.175-.418.066-.453.11-.53.486-.874z" fill="#557C94"/>
  </svg>
);

const WiresharkLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.628 0 12-5.372 12-12C24 5.373 18.628 0 12 0zm0 2.769c5.099 0 9.23 4.131 9.23 9.231 0 2.404-.925 4.6-2.439 6.236L16.2 8.358c-1.368 2.05-4.225 3.324-4.814 3.737l-1.31-5.753-1.258 5.727-4.135-2.905c1.472-3.805 5.176-6.495 9.516-6.495zm-9.23 9.231c0-1.742.484-3.376 1.315-4.757l3.722 2.559 1.119-4.82 1.621 6.828c-1.802-1.367-3.957-2.605-5.834-3.485.452 2.923 2.196 5.433 4.606 6.945-2.222-2.124-4.733-4.571-7.234-7.51-1.353-.96-2.583-1.72-3.666-2.28 1.11 3.518 3.514 6.471 6.685 8.163l.89-.982 2.062.915-2.203.373c-4.498-1.572-7.854-5.69-8.411-10.669z" fill="#1679A7"/>
  </svg>
);

const LaragonLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.5 3.7-7.5 3.7-7.5-3.7L12 4.8zm-8 6.5l7 3.5v7.2l-7-3.5v-7.2zm16 0v7.2l-7 3.5v-7.2l7-3.5z" fill="#00A8E8"/>
  </svg>
);

const getSkillLogo = (skillName: string, category: string): React.ReactNode => {
  const normName = skillName.toLowerCase().trim();
  switch (normName) {
    case 'c++': return <CplusplusLogo />;
    case 'git': return <GitLogo />;
    case 'github': return <GitHubLogo />;
    case 'visual studio code': return <VSCodeLogo />;
    case 'netbeans': return <NetBeansLogo />;
    case 'android studio': return <AndroidStudioLogo />;
    case 'docker': return <DockerLogo />;
    case 'autopsy': return <AutopsyLogo />;
    case 'java': return <JavaLogo />;
    case 'php': return <PHPLogo />;
    case 'javascript': return <JavaScriptLogo />;
    case 'node.js': return <NodejsLogo />;
    case 'laravel': return <LaravelLogo />;
    case 'python': return <PythonLogo />;
    case 'ubuntu': return <UbuntuLogo />;
    case 'firebase': return <FirebaseLogo />;
    case 'supabase': return <SupabaseLogo />;
    case 'kali linux': return <KaliLinuxLogo />;
    case 'wireshark': return <WiresharkLogo />;
    case 'laragon': return <LaragonLogo />;
    case 'sql':
    case 'mysql': return <SQLLogo />;
    default:
      if (category === 'Cyber Security') return <CyberSecurityLogo />;
      if (category === 'Soft Skills') {
        if (normName.includes('problem')) return <Brain className="w-5 h-5 text-indigo-600" />;
        if (normName.includes('team')) return <Users className="w-5 h-5 text-blue-600" />;
        if (normName.includes('leader')) return <Sparkles className="w-5 h-5 text-sky-600" />;
        return <Brain className="w-5 h-5 text-slate-600" />;
      }
      return null;
  }
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Group skills by category for structural block display
  const groupSkillsByCategory = (list: Skill[]) => {
    return list.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
  };

  const groupedSkills = groupSkillsByCategory(SKILLS);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Technical Skills': return <Code className="w-5 h-5 text-blue-600" />;
      case 'Soft Skills': return <Brain className="w-5 h-5 text-blue-600" />;
      default: return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-start pt-32 pb-24 relative overflow-hidden bg-transparent"
    >
      {/* Decorative Section Divider */}
      <div className="absolute top-0 inset-x-0 flex justify-center items-start">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-0 w-2/3 max-w-md h-[1.5px] bg-gradient-to-r from-transparent via-blue-700/40 to-transparent blur-[1px]" />
        
        {/* Center glowing element */}
        <div className="absolute top-[-3px] w-12 h-1.5 bg-blue-500 rounded-full blur-[3px] opacity-60" />
        <div className="absolute top-[-1px] w-4 h-0.5 bg-blue-300 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="font-mono text-xs sm:text-sm text-[#1E3A8A] tracking-[0.25em] uppercase mb-4 font-semibold opacity-80">
            Expertise
          </span>
          <div className="relative inline-block">
            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-12 sm:-left-16 text-blue-400/50"
            >
              <Code className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, -15, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -right-12 sm:-right-16 text-sky-500/30"
            >
              <Brain className="w-10 h-10 sm:w-12 sm:h-12" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -right-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400/50 blur-[2px]"
            />

            <h2 id="skills-heading" className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl text-[#1E3A8A] tracking-tighter drop-shadow-sm relative z-10">
              My Skills
            </h2>
          </div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#1E3A8A] to-blue-700 rounded-full mt-7 shadow-sm" />
        </motion.div>

        {/* Skills Cards Vertical Stack */}
        <motion.div 
          className="flex flex-col gap-10 w-full max-w-4xl mx-auto"
        >
          {['Technical Skills', 'Soft Skills'].map((categoryName) => {
            const skillsInGroup = groupedSkills[categoryName];
            if (!skillsInGroup) return null;
            return (
              <React.Fragment key={categoryName}>
                <div
                  className={`bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl border border-slate-200/60 hover:border-blue-300/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-[0_8px_32px_rgba(30,58,138,0.08)] w-full hover:shadow-[0_20px_50px_-20px_rgba(30,58,138,0.25)] hover:-translate-y-1 transition-all duration-300 group/card`}
                >
                {/* Cyber Theme Network / Grid Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <svg width="100" height="100" className="text-blue-900" fill="currentColor" viewBox="0 0 100 100">
                    <rect x="10" y="10" width="4" height="4" />
                    <rect x="30" y="10" width="4" height="4" />
                    <rect x="10" y="30" width="4" height="4" />
                    <rect x="30" y="30" width="4" height="4" />
                    <rect x="50" y="10" width="4" height="4" />
                    <rect x="10" y="50" width="4" height="4" />
                    <rect x="50" y="30" width="4" height="4" />
                    <rect x="30" y="50" width="4" height="4" />
                    <rect x="50" y="50" width="4" height="4" />
                  </svg>
                </div>
                <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-blue-500/10`} />

                {/* Modern Left-Aligned Header */}
                <div className="flex flex-col items-start mb-10 relative z-10 w-full">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100/50 flex items-center justify-center shadow-sm">
                       {getCategoryIcon(categoryName)}
                    </div>
                    <h3 
                      className="font-sans font-black text-3xl sm:text-4xl text-[#2D3748] tracking-tight"
                    >
                      {categoryName}
                    </h3>
                  </div>
                  <div className="h-[2px] w-full bg-gradient-to-r from-blue-100 via-slate-100 to-transparent mt-4" />
                </div>

                {/* Skills items: Group by SubCategory if they exist */}
                <div className="flex flex-col gap-8">
                  {Object.entries(
                    skillsInGroup.reduce((acc, skill) => {
                      const sub = skill.subCategory || 'General';
                      if (!acc[sub]) acc[sub] = [];
                      acc[sub].push(skill);
                      return acc;
                    }, {} as Record<string, Skill[]>)
                  ).map(([subCategoryName, subSkills]) => (
                    <div key={subCategoryName} className="flex flex-col items-start w-full">
                      {subCategoryName !== 'General' && (
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                          <h4 className="font-sans font-bold text-sm text-[#1E3A8A] tracking-wider uppercase opacity-90">
                            {subCategoryName}
                          </h4>
                        </div>
                      )}
                      <div className="flex flex-wrap justify-start gap-3.5">
                        {subSkills.map((skill) => (
                          <div
                            key={skill.name}
                            className="relative"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200/70 rounded-full transition-all duration-300 cursor-help group shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(30,58,138,0.08)] hover:-translate-y-0.5 relative z-10">
                              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                {getSkillLogo(skill.name, skill.category)}
                              </div>
                              <span className="font-sans font-bold text-xs text-slate-700 group-hover:text-blue-650 transition-colors">
                                {skill.name}
                              </span>
                              <Info className="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors opacity-60 group-hover:opacity-100 ml-0.5" />
                            </div>

                            {/* Floating premium Tooltip on skill hover */}
                            <div
                              className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-zinc-200 leading-relaxed font-sans shadow-xl pointer-events-none transition-all duration-200 transform origin-bottom ${
                                hoveredSkill === skill.name
                                  ? 'opacity-100 scale-100 translate-y-0 visible'
                                  : 'opacity-0 scale-95 translate-y-1 invisible'
                              }`}
                            >
                              <p className="font-sans font-bold text-xs text-white mb-1">{skill.name}</p>
                              <p className="text-zinc-350">{skill.description}</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-slate-900 border-r border-b border-slate-800 rotate-45" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </React.Fragment>
          )})}
        </motion.div>

        <PageNavigation 
          prevLabel="Back to About" prevPath="/about" 
          nextLabel="View Portfolio" nextPath="/portfolio" 
        />
      </div>
    </section>
  );
}
