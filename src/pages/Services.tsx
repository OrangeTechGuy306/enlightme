

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-[100px] p-5 flex flex-col items-center">

        <h1 className="md:text-5xl text-3xl text-blue-500 text-center font-bold">Our <span className="text-red-500">Core</span> Services</h1>
        <p className="md:w-[500px] w-[100%] text-center my-4">My core services include expert consultation, application assistance, visa guidance, and support are essential and form the foundation of a strong study-abroad consultancy.</p>



        <h1 className="text-blue-500 font-bold text-xl">Pre-Application <span className="text-red-500">Services.</span></h1>
        <div className="flex justify-center items-center gap-5 flex-wrap my-5">
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Personalized Consultation: Career counselling, university selection, and course matching.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Profile Building - CV enhancement, SOP guidance, and recommendation letter assistance.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Scholarship Advisory: Assistance with finding and applying for scholarships.</p>
            </div>
        </div>


        <h1 className="text-blue-500 font-bold text-xl">Application <span className="text-red-500">Assistance.</span></h1>
        <div className="flex justify-center items-center gap-5 flex-wrap my-5">
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Document Preparation: Application form completion, transcript verification, and submission.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Application Follow-up: Liaising with universities for application updates.</p>
            </div>
        </div>


        <h1 className="text-blue-500 font-bold text-xl">Visa Guidance & <span className="text-red-500">Travel Support.</span></h1>
        <div className="flex justify-center items-center gap-5 flex-wrap my-5">
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Visa Application Assistance: Guidance on student visa requirements and documentation.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Visa Interview Preparation: Mock interviews and common question preparation.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Pre-Departure Briefing: Cultural orientation, financial planning, and travel checklists.</p>
            </div>
        </div>

        <h1 className="text-blue-500 font-bold text-xl">
            Post-Arrival & <span className="text-red-500">Additional Support.</span>
        </h1>
        <div className="flex justify-center items-center gap-5 flex-wrap my-5">
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Accommodation Assistance: Guidance on finding housing in France.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Health Insurance & Financial Planning: Advice on securing mandatory student health insurance.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>French Language Support: Resources for learning basic French.</p>
            </div>
            <div className="border border-slate-100 w-[300px] h-[100px] rounded-md bg-white p-3 text-slate-500">
                <p>Networking & Alumni Support: Connecting students with past applicants in France.</p>
            </div>
        </div>

    </div>
  )
}

export default ServicesPage