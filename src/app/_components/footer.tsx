import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            HSANNU: Where Finance Meets Future
          </h3>
          <div className="flex justify-center space-x-6 text-sm text-neutral-500">
            <a href="mailto:finance@hasannu.edu" className="hover:text-blue-600">
              联系我们
            </a>
            <span>·</span>
            <a href="/about" className="hover:text-blue-600">
              关于我们
            </a>
            <span>·</span>
            <span>© 2026 HSANNU</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
