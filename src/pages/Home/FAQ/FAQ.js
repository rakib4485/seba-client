import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='px-[6%]'>
            <h1 className="text-center text-3xl font-bold mt-20">সচরাচর জিজ্ঞাসা</h1>
            {/* <div className="grid grid-cols-3 gap-8 mt-16">
                <div>
                    <h5 className="text-xl font-semibold">আমি যখন একজন থেরাপিস্টকে দেখি তখন প্রথম সেশনে আমি কী আশা করতে পারি?</h5>
                    <p className='text-justify my-4'> আপনার মানসিক স্বাস্থ্য সম্পর্কে বিস্তারিত জানা এবং থেরাপিস্টের সাথে সম্পর্ক গঠন করা। আপনার থেরাপির উদ্দেশ্য এবং লক্ষ্য সম্পর্কে আলোচনা এবং নির্ধারণ করা। থেরাপিস্টের সাথে মানসিক স্বাস্থ্য সম্পর্কে সম্প্রেশণমূলক এবং সহায়ক সংলাপ।</p>
                    <p className='uppercase text-orange-500'><Link>Read more</Link></p>
                </div>
                <div>
                    <h5 className="text-xl font-semibold">What can I expect in the first session when I see a therapist?</h5>
                    <p className='text-justify my-4'>Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in.</p>
                    <p className='uppercase text-orange-500'><Link>Read more</Link></p>
                </div>
                <div>
                    <h5 className="text-xl font-semibold">What can I expect in the first session when I see a therapist?</h5>
                    <p className='text-justify my-4'>Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in.</p>
                    <p className='uppercase text-orange-500'><Link>Read more</Link></p>
                </div>
            </div> */}
            <div className="collapse collapse-plus w-[70%] mx-auto mt-10">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-semibold bg-orange-300">
  আমি যখন একজন থেরাপিস্টকে দেখি তখন প্রথম সেশনে আমি কী আশা করতে পারি?
  </div>
  <div className="collapse-content"> 
  <p className='text-lg font-semibold'>একটি প্রথম সেশনে আপনি নিম্নলিখিত আশা রাখতে পারেন:</p>
    <ul className='ml-2'>
        <li className='list-decimal mb-1'><strong>সম্পর্ক ও বিশ্বাস তৈরি:</strong> থেরাপিস্টের সাথে একটি সুস্থ এবং সম্পর্ক তৈরি করাতে আশা করুন। আপনি একটি স্থির ও বিশ্বস্ত মানসিক পরিবেশ তৈরি করতে সাহায্য পেতে পারেন।</li>
        <li className='list-decimal mb-1'><strong>আপনার গুরুত্বপূর্ণ মুদ্রণ প্রদান করা:</strong>  আপনি আপনার থেরাপিস্টকে আপনার সামাজিক, মানসিক বা আবেগিক স্থিতি সম্পর্কে স্পষ্টভাবে জানাতে পারেন।</li>
        <li className='list-decimal mb-1'><strong>লক্ষ্য এবং উত্তরমূলক সম্মিলিত কাজে সহায়ক হওয়া: </strong> থেরাপির মূল লক্ষ্য এবং যে উত্তরমূলক সম্মিলিত কাজ করতে আপনি আশা করতে পারেন।</li>
        <li className='list-decimal mb-1'><strong>থেরাপির প্রক্রিয়া সম্পর্কে জানা:</strong> থেরাপি প্রক্রিয়া সম্পর্কে আপনি আশা করতে পারেন, যেমন কোনটি থেরাপির প্রকার, সেশনের সময় ও সংখ্যা, এবং অন্যান্য মৌখিক যোগাযোগের নিয়ম।</li>
        <li className='list-decimal mb-1'>
        <strong>আপনার উত্তরমূলক পরিস্থিতি এবং সুস্থ সামগ্রী ব্যবস্থাপনা: </strong> থেরাপিস্টকে আপনার উত্তরমূলক পরিস্থিতি এবং সুস্থ সামগ্রী ব্যবস্থাপনা করার জন্য আপনি আশা করতে পারেন।
        </li>
    </ul>
    </div>
</div>
<div className="collapse collapse-plus w-[70%] mx-auto my-5">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-semibold bg-orange-300">
  কিভাবে থেরাপি শিশু/কিশোর/কিশোর/পরিবারদের উপকার করতে পারে?
  </div>
  <div className="collapse-content mt-2"> 
    <p className='text-lg font-semibold'>থেরাপি শিশু, কিশোর এবং পরিবারের উপকারে আসতে পারে যেভাবে:</p>
    <ul className='ml-2'>
        <li className='list-decimal mb-1'><strong>মানসিক স্বাস্থ্য সমর্থন:</strong> থেরাপি মাধ্যমে শিশু, কিশোর এবং পরিবার মানসিক সমস্যা ও চ্যালেঞ্জের সামর্থ্য বৃদ্ধি করতে সাহায্য করতে পারে, যেমন ডিপ্রেশন, উদ্বেগ, স্বাভাবিক বাচ্চার বৃদ্ধি ও পারম্পরিক সমস্যার জন্য।</li>
        <li className='list-decimal mb-1'><strong>কৌশল ও প্রতিস্থানতা:</strong> থেরাপি ব্যক্তির কৌশল ও স্থিরতা উন্নত করতে সাহায্য করতে পারে, যাতে সে স্কুল, সামাজিক কাজ এবং আপনার পরিবারে সামঞ্জস্যপূর্ণভাবে প্রতিস্থান করতে পারে।</li>
        <li className='list-decimal mb-1'><strong>সমস্যা সমাধান:</strong> থেরাপি মাধ্যমে শিশু এবং কিশোর কোন সমস্যা সমাধান করতে সাহায্য পেতে পারে, যেমন কনফ্লিক্ট সমাধান, আত্মবিশ্বাস উন্নত করা ইত্যাদি।</li>
        <li className='list-decimal mb-1'><strong>কৌশল শেখানো:</strong> থেরাপি মাধ্যমে শিশু এবং কিশোরদের কৌশল শেখাতে সাহায্য করতে পারে, যেমন মাতৃভাষা শেখানো, সময় পরিচেষ্টা ব্যবস্থাপনা ইত্যাদি।</li>
        <li className='list-decimal mb-1'>
        <strong>পরিবারের সাপোর্ট:</strong> থেরাপি মাধ্যমে পরিবার সদস্যগণ শিশু/কিশোরদের সাপোর্ট করতে পারে, যেমন সঠিক মাতৃ-পিতৃ প্রেম, সম্পর্ক তৈরি ইত্যাদি।
        </li>
    </ul>
  </div>
</div>
<div className="collapse collapse-plus w-[70%] mx-auto">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-semibold bg-orange-300">
  আমি সংকটে না থাকলেও কি থেরাপির প্রয়োজন?
  </div>
  <div className="collapse-content"> 
  <p className='text-lg font-semibold'>আপনি যদি সংকটে না থাকেন, তবে আপনি এখানে কিছু কারণে থেরাপির প্রয়োজন হতে পারে:</p>
    <ul className='ml-2'>
        <li className='list-decimal mb-1'><strong>আত্ম-উন্নতি এবং স্থায়িত্ব বৃদ্ধি:</strong> থেরাপি সাধারণভাবে আত্ম-উন্নতি এবং স্থায়িত্ব বৃদ্ধির জন্য সাহায্য করতে পারে। সেশনের মাধ্যমে আপনি আপনার কৌশল বৃদ্ধি করতে পারেন, নতুন দক্ষতা শেখা এবং আপনার উদ্দেশ্যগুলি পর্যাপ্তভাবে বুঝতে সাহায্য পাবেন।</li>
        <li className='list-decimal mb-1'><strong>আত্ম-জ্ঞান এবং বৈশিষ্ট্য উন্নত করা:</strong> থেরাপির মাধ্যমে আপনি নিজের অধিক ভালো জানতে এবং আপনার বৈশিষ্ট্য উন্নত করতে পারেন।</li>
        <li className='list-decimal mb-1'><strong>সম্পর্ক এবং আপনার আশাস্তির কাজে সাহায্য: </strong> থেরাপি আপনার সামাজিক সম্পর্ক, পরিবারের সমস্যা সমাধান এবং পরিবারের সাথে আপনার সম্পর্ক উন্নত করতে সাহায্য করতে পারে।</li>
        <li className='list-decimal mb-1'><strong>স্থায়িত্ব এবং মানসিক স্বাস্থ্যের ব্যবস্থাপনা:</strong> থেরাপি মাধ্যমে আপনি মানসিক স্বাস্থ্য সম্পর্কিত সঠিক স্থায়িত্ব এবং সহায়তা প্রাপ্ত করতে পারেন।</li>
        <li className='list-decimal mb-1'>
        <strong>আত্ম-গড়িতা এবং যোগাযোগ দক্ষতা উন্নত করা:</strong> থেরাপি মাধ্যমে আপনি আত্ম-গড়িতা এবং যোগাযোগ দক্ষতা উন্নত করতে পারেন, যা আপনার সামাজিক এবং পেশাদার জীবনে সাহায্য করতে পারে।
        </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default FAQ;