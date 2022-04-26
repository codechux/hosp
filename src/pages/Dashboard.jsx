import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NotifyBanner from "../components/NotifyBanner";
import NotifyCard from "../components/NotifyCard";
import * as RmxIcons from "react-icons/ri";
import "./css/dashboard.css";
import PatientActivity from "../components/PatientActivity";
import PatientsList from "../components/PatientsList";
import CreatePatient from "../components/CreatePatient";
import { patients } from "../utils/patients";

const Dashboard = () => {
  const [createFormOpen, setCreateFormOpen] = useState(false);

  const [patientsList, setPatientsList] = useState([]);

  const createNewPatient = (data) => {
    console.log(data);
    setPatientsList([data, ...patientsList]);
  };

  useEffect(() => {
    patients().then((data) => {
      setPatientsList(data);
    });
  }, []);

  return (
    <div className="dashboard  me">
      <Navbar openCreateForm={setCreateFormOpen} />
      <div className="content">
        <section>
          <NotifyBanner
            username="Dr. Joshi"
            msg="Unlock the full potential to become"
            btnLabel="Go Premium"
          />

          <div className="metric-card-group">
            <NotifyCard
              imgIcon={<RmxIcons.RiCapsuleFill />}
              metric={"24"}
              metricName={"New Patients"}
            />
            <NotifyCard
              imgIcon={<RmxIcons.RiProfileFill />}
              metric={"13"}
              metricName={"Important Tasks"}
            />
            <NotifyCard
              imgIcon={<RmxIcons.RiGenderlessFill />}
              metric={"09"}
              metricName={"Complex Alerts"}
            />
          </div>

          <PatientActivity />

          <PatientsList patientsList={patientsList} />
        </section>
        <aside></aside>
      </div>
      {createFormOpen && (
        <CreatePatient
          createNewPatient={createNewPatient}
          closeForm={setCreateFormOpen}
        />
      )}
    </div>
  );
};

export default Dashboard;
