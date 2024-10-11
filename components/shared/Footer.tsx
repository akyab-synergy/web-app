import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/react-dialog";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Minus, Plus, BarChart } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "../ui/drawer";

export default function Footer() {
  return (
    <footer className="relative grid w-full bg-primary text-white px-4 py-6 md:px-20 md:py-10 grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0">
      <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-center md:text-left">
        <li>Privacy Policy</li>
        <div className="border-r-0 md:border-r-2 h-0 md:h-5" />
        <li>
          <Drawer>
            <DrawerTrigger asChild>
              <p className="cursor-pointer hover:opacity-80">
                Terms & Conditions
              </p>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh]">
              <div className="mx-auto w-full px-6 lg:px-12 overflow-y-auto">
                <DrawerHeader>
                  <DrawerTitle className="text-center space-y-2 text-primary">
                    <h2>AKYAB SYNERGY COMPANY LIMITED</h2>
                    <h3>TERMS & CONDITIONS</h3>
                  </DrawerTitle>
                  <DrawerDescription>
                    <ul className="list-disc space-y-4 w-full text-sm mt-6">
                      <li>
                        စာရွက်စာတန်း နှင့် ကုန်ပစ္စည်းများ
                        လုံခြုံစိတ်ချမှုရှိစေရန် ထုတ်ပိုးပေးရမည်မှာ ပေးပို့သူ၏
                        တာဝန်သာြဖစ်ပြီး ပြန်လည်ထုတ်ပိုးရန် လိုအပ်မှသာ Akyab
                        Synergy Co., Ltd. မှ ပံ့ပိုးပေးပါမည်။
                      </li>
                      <li>
                        ကျိုးပဲ့ ၊ ပုပ်သိုး ၊ ပျက်စီးနိုင်သော ပစ္စည်းများကို
                        ပေးပို့သူမှ တာဝန်ယူရပါမည်။ Akyab Synergy Co., Ltd. မှ
                        တာဝန်ယူမည် မဟုတ်ပါ။
                      </li>
                      <li>
                        သက်ဆိုင်ရာ ကားဂိတ်များ ၊ လေဆိပ်များ ၊ အခွန်ရုံးများ
                        နှင့် တာဝန်ရှိရုံးများတွင် စစ်ဆေးခြင်း ကိစ္စရပ်များအတွက်
                        ပေးပို့သူ၏ ပစ္စည်း ပျက်စီး ဆုံးရှုံးမှုများကို Akyab
                        Synergy Co., Ltd. မှ တာဝန်ယူမည် မဟုတ်ပါ ။
                      </li>
                      <li>စာရင်းသွင်းပြီးသော ပစ္စည်းများအား ငွေပြန်မအမ်းပါ။</li>
                      <li>
                        စစ်ဘေး အန္တရာယ်ကြောင့် ဖြစ်ပေါ်လာသော ကိစ္စရပ်များနှင့်
                        ရန်သူမျိုး ငါးပါးကြောင့် ဖြစ်ပေါ်လာသော
                        ပျက်စီးဆုံးရှုံးမှုများကို တာဝန်ယူမည် မဟုတ်ပါ။
                      </li>
                      <li>
                        ပေးပို့သူ၏ ပစ္စည်း ပျက်စီးပျောက်ဆုံးပါက ပေးပို့ခ၏ ( ၅ ဆ
                        ) ၂၅၀၀၀၀ အထိသာ လျော်ပေးမည်ဖြစ်ပါသည်။
                        ပေးပို့လာသောပစ္စည်းများ၏ မူလတန်ဖိုးမှာ ‌‌ပေးပို့ခထက်
                        လျော့နည်းနေပါက ပစ္စည်း၏ မူလတန်ဖိုးအတိုင်းသာ
                        ပေးလျော်ပါမည်။
                      </li>
                      <li>
                        စာထုတ် / ချောစာ ပစ္စည်းများအတွက် လျော်ကြေးငွေအား
                        မူရင်းလက်ခံပြေစာနှင့် အတူ သတ်မှတ်ကာလ ( ၁လ ) အတွင်း
                        လာရောက်တောင်းခံနိုင်ပါသည်။ သတ်မှတ်ကာလ ( ၁လ )
                        ကျော်လွန်ပါက လျော်ကြေးငွေပြန်အမ်းမည် မဟုတ်ပါ။
                      </li>
                      <li>
                        ပေးပို့လိုသည့် လိပ်စာတွင် လိပ်စာမပြည့်စုံခြင်း ၊
                        လိပ်စာမှားယွင်းခြင်းများကြောင့် ပေးပို့နိုင်ခြင်း
                        မရှိပါက ချောစာ / ပစ္စည်း ပို့ခငွေနှင့် အာမခံဝန်ဆောင်မှု
                        ငွေအားပြန်အမ်းမည် မဟုတ်ပါ။{" "}
                      </li>
                      <li>
                        Akyab Synergy Co., Ltd. မှ ပစ္စည်းလာပို့သောအခါ
                        ပစ္စည်းလက်ခံမည့်သူက အလုပ်ကိစ္စကြောင့်အပြင်‌ရောက်နေသည်
                        ဖြစ်စေ မည်သည့်အကြောင်းကြောင့်ဖြစ်စေ လက်မခံနိုင်ခဲ့လျှင်
                        တစ်ရက်တာအတွင်း ( ၃ ကြိမ် ) တိတိ Checking ပြန်လည်လာရောက်
                        ပို့ဆောင်ပေးမည် ဖြစ်ပါသည်။
                      </li>
                      <li>
                        ( ၃ ကြိမ် ) လုံး Checking လုပ်ပြီးသော်လည်း
                        လက်ခံပေးမည့်သူ မရှိဖြစ်နေဆဲဆိုလျှင် နောက်တစ်နေ့
                        လာရောက်ပို့ဆောင်သောအခါ ပို့ဆောင်ခကို ( ၂ ရက် )ခ အနေနှင့်
                        ကောက်ခံသွားမည် ဖြစ်ပါသည်။{" "}
                      </li>
                      <li>
                        Akyab Synergy Co.,Ltd. သို့ ပစ္စည်းလာရောက်
                        အပ်နှံသူများအား ဤစည်းမျည်း စည်းကမ်းများအား
                        နားလည်လိုက်နာပြီး ဖြစ်ကြောင်း သတ်မှတ်ပါမည်။
                        ပေးပို့ခြင်းမပြုသော ပစ္စည်းများ ဥပ‌ဒေအရ မလွတ်ကင်းသော စာ၊
                        ပစ္စည်းများ၊ လက်နက်ခဲယမ်းများ ( လက်နက်အစစ်နှင့်
                        အနီးဆုံးတူသော ကစားစရာများ )၊
                        ရွှေ၊ငွေ၊ကျောက်မျက်ရတနာများနှင့် တန်ဖိုးကြီးပစ္စည်းများ၊
                        မူးယစ်ဆေးဝါးနှင့် ကျန်းမာရေးဆိုင်ရာ ထောက်ခံချက် မရှိသော
                        ပစ္စည်းများ၊ သက်ရှိ၊ သက်မဲ့ အရာများနှင့် ၎င်းတို့၏
                        ခန္ဓာကိုယ်အစိတ်အပိုင်းများ၊ မီးလောင်လွယ်စေသော
                        ပစ္စည်းများ၊ ကျိုးပဲ့ ပျက်စီးလွယ်သော ပစ္စည်းများ၊
                        အက်စစ်ကဲ့သို့သော ကျန်းမာ‌‌ရေးနှင့်
                        ပတ်ဝန်းကျင်ထိခိုက်စေနိုင်သော ပစ္စည်းများ၊ မြန်မာနိုင်ငံ၏
                        တည်ဆဲ စည်းမျည်း စည်းကမ်းနှင့် မညီသော ပစ္စည်းများ အား
                        ပေးပို့ခြင်းကို ခွင့်မပြုပါ။
                      </li>
                      <li className="list-none text-primary">
                        ( ခွင့်မပြုထားသော ပစ္စည်းများကို လိမ်လည်ပြောဆိုပြီး
                        ဖြစ်စေ၊ ကွယ်ဝှက်ပြီး ဖြစ်စေ ပို့ဆောင်သောကြောင့် ပြသနာ
                        တစ်စုံတစ်ရာ ဖြစ်လာပါက ပို့ဆောင်သူ၏ တာဝန်သာဖြစ်ကြောင်း
                        သတိပေးအပ်ပါသည်။ )
                      </li>
                    </ul>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="p-0 ">
                  <DrawerClose asChild>
                    <Button className="text-wrap !py-8 mb-4 lg:!py-6 mt-4">
                      I agree and understand the Terms & Conditions!
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </li>
      </ul>
      <div className="text-sm text-center order-first md:order-none">
        © 2024 Akyab Syngery. All rights reserved.
      </div>
      <ul className="flex justify-center lg:justify-end items-center gap-4 text-xl self-end">
        <li>
          <a
            href="https://facebook.com/akyabsynergy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:opacity-80" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/akyabsynergy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="hover:opacity-80" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
