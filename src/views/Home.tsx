import { Helmet } from "react-helmet";
import appStyles from "../App.module.scss";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Minecraft Manipulator - Edit & Convert Minecraft Worlds For Free!</title>
        <meta
          name="description"
          content="Minecraft Manipulator offers a free and open-source solution that allows the user to edit and convert Minecraft worlds on all platforms, including consoles."
        />
        <meta
          property="og:title"
          content="Minecraft Manipulator - Edit &amp; Convert Minecraft Worlds For Free!"
        />
        <meta
          property="og:description"
          content="Minecraft Manipulator offers a free and open-source solution that allows the user to edit and convert Minecraft worlds on all platforms, including consoles."
        />
      </Helmet>
      <div className={styles.container01}>
        <header data-thq="thq-navbar" className={styles["navbar-interactive"]}>
          <div className={styles.container02}>
            <img
              alt="logo"
              src="/playground_assets/phonto%20%5B1%5D-200h.png"
              className={styles.logo}
            />
            <h1 className={styles.text}>
              <span> Minecraft Manipulator</span>
              <br></br>
            </h1>
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" className={styles["desktop-menu"]}>
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className={styles.nav}>
              <span className={styles.text003}>Home</span>
              <span className={styles.text004}>Documentation</span>
              <span className={styles.text005}>Guides</span>
              <span className={styles.text006}>Donations</span>
              <span className={styles.text007}>EULA</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className={styles["btn-group"]}>
            <button className={`${styles.button} ${appStyles.button}`}>Support</button>
            <button className={`${styles.button1} ${appStyles.button}`}>Download</button>
          </div>
          <div data-thq="thq-burger-menu" className={styles["burger-menu"]}>
            <svg viewBox="0 0 1024 1024" className={styles.icon}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className={styles["mobile-menu"]}>
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className={styles.nav1}>
              <div className={styles.container03}>
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className={styles.image}
                />
                <div data-thq="thq-close-menu" className={styles["menu-close"]}>
                  <svg viewBox="0 0 1024 1024" className={styles.icon02}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className={styles.nav2}>
                <span className={styles.text008}>About</span>
                <span className={styles.text009}>Features</span>
                <span className={styles.text010}>Pricing</span>
                <span className={styles.text011}>Team</span>
                <span className={styles.text012}>Blog</span>
              </nav>
              <div className={styles.container04}>
                <button className={`${styles.login} ${appStyles.button}`}>Login</button>
                <button className={appStyles.button}>Register</button>
              </div>
            </div>
            <div className={styles["icon-group"]}>
              <svg viewBox="0 0 950.8571428571428 1024" className={styles.icon04}>
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className={styles.icon06}>
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className={styles.icon08}>
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <h1 className={styles.text013}>MINECRAFT MANIPULATOR</h1>
        <span className={styles.text014}>
          <span>Reliably </span>
          <span className={styles.text016}>Convert</span>
          <span>
            {" "}
            And
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <span className={styles.text018}>Edit</span>
          <span>
            {" "}
            Your
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <br></br>
          <span>Minecraft Worlds!</span>
          <br></br>
          <span>Proudly Free And 100% </span>
          <span>Open-Source.</span>
          <br></br>
        </span>
        <button className={`${styles.button2} ${appStyles.button}`}>Download Now!</button>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className={styles.image01}
        />
      </div>
      <div className={styles.container05}>
        <h1 className={styles.text026}>YOUR BEST SHOT.</h1>
        <span className={styles.text027}>
          <span>The Minecraft Manipulator is a great solution</span>
          <br></br>
          <span>for modding your Minecraft worlds. </span>
          <br></br>
          <span>Everything in the tool is open-source</span>
          <br></br>
          <span>and it all shares one codebase.</span>
          <span>
             With tons
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <br></br>
          <span>of options, features and </span>
          <span>capabilities, the</span>
          <br></br>
          <span>
            Minecraft Manipulator is
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <br></br>
          <span>truly </span>
          <span>your best shot!</span>
          <br></br>
        </span>
        <div className={styles.container06}>
          <div className={styles.container07}>
            <div className={styles.container08}>
              <img alt="image" src="/playground_assets/nbt-editor.png" className={styles.image02} />
              <span className={styles.text045}>
                <span className={styles.text046}>NBT Editor</span>
                <br className={styles.text047}></br>
                <span className={styles.text048}>
                  Edit the saved data of your world using the most powerful NBT editor around,
                  allowing you to unlock the full potential of your Minecraft worlds.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
            <div className={styles.container09}>
              <img
                alt="image"
                src="/playground_assets/world-converter.png"
                className={styles.image03}
              />
              <span className={styles.text051}>
                <span className={styles.text052}>World Converter</span>
                <br className={styles.text053}></br>
                <span className={styles.text054}>
                  Convert your Minecraft worlds between different editions and versions to play on
                  another supported device.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className={styles.container10}>
            <div className={styles.container11}>
              <img
                alt="image"
                src="/playground_assets/download_from_the_cloud_96px-200h.png"
                className={styles.image04}
              />
              <span className={styles.text056}>
                <span className={styles.text057}>OTA &amp; Automatic Updates</span>
                <br></br>
                <span className={styles.text059}>
                  As Minecraft updates, the Minecraft Manipulator will be dynamically updated. When
                  they&apos;re ready, the latest changes will automatically be downloaded when you
                  open the app.
                </span>
                <br></br>
              </span>
            </div>
            <div className={styles.container12}>
              <img
                alt="image"
                src="/playground_assets/extension-plugin.png"
                className={styles.image05}
              />
              <span className={styles.text061}>
                <span className={styles.text062}>Extension / Plug-In Support</span>
                <br></br>
                <span className={styles.text064}>
                  Extend the capabilities and the features of the Minecraft Manipulator with both
                  official and community-built extensions and plugins.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className={styles.container13}>
            <div className={styles.container14}>
              <img alt="image" src="/playground_assets/grf-editor.png" className={styles.image06} />
              <span className={styles.text066}>
                <span className={styles.text067}>GRF Editor</span>
                <br className={styles.text068}></br>
                <span className={styles.text069}>
                  Edit GRF files in seconds with the mods power GRF editor. Allowing you to //Add
                  something here UtterEvergreen1 or someone from the team.
                </span>
                <br></br>
              </span>
            </div>
            <div className={styles.container15}>
              <img
                alt="image"
                src="/playground_assets/github_512px-200h.png"
                className={styles.image07}
              />
              <span className={styles.text071}>
                <span className={styles.text072}>A path to openness</span>
                <br></br>
                <span className={styles.text074}>
                  The Minecraft Manipulator is
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br className={styles.text075}></br>
                <span className={styles.text076}>
                  open-sourced, allowing others to learn from and build upon it, the way a real tool
                  should be.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className={styles.container16}>
            <div className={styles.container17}>
              <img
                alt="image"
                src="/playground_assets/accessibility.png"
                className={styles.image08}
              />
              <span className={styles.text078}>
                <span className={styles.text079}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className={styles.text080}>Accessibility</span>
                <br className={styles.text081}></br>
                <span className={styles.text082}>
                  There is importance and value in a clean and user-friendly interface. Keeping
                  things simple yet elegant allows even beginners to take advantage of advanced
                  features.
                </span>
                <br></br>
              </span>
            </div>
            <div className={styles.container18}>
              <img
                alt="image"
                src="/playground_assets/icons8-tornado-96-200h.png"
                className={styles.image09}
              />
              <span className={styles.text084}>
                <span className={styles.text085}>Power users, welcome.</span>
                <br></br>
                <span className={styles.text087}>
                  The tool has been designed from the ground up with community contributions and
                  compatibility in mind. Bringing several features that have not been seen in any
                  other all-in-one tool before.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container19}>
        <h1 className={styles.text090}>SUPORTED PLATFORMS</h1>
        <div className={styles.container20}>
          <div className={styles.container21}>
            <div className={styles.container22}>
              <img alt="image" src="/playground_assets/xbox.png" className={styles.image10} />
              <span className={styles.text091}>
                <span className={styles.text092}>XBOX TU0 - TU75 / 1.13.2</span>
                <br></br>
                <span className={styles.text094}>• Xbox 360 | E | S | Arcade | Pro | Elite</span>
                <br></br>
                <br></br>
                <span className={styles.text097}>Legacy Edition Next-Generation</span>
                <br></br>
                <span className={styles.text099}>• Xbox One | S | X</span>
                <br></br>
              </span>
            </div>
            <div className={styles.container23}>
              <img alt="image" src="/playground_assets/ps3.png" className={styles.image11} />
              <span className={styles.text101}>
                <span className={styles.text102}>PlayStation TU0 - TU75 | 1.84 (1.13.2)</span>
                <br></br>
                <span className={styles.text104}>• </span>
                <span className={styles.text105}>PlayStation®Vita</span>
                <br className={styles.text106}></br>
                <span className={styles.text107}>• </span>
                <span className={styles.text108}>
                  PlayStation®3 | Super Slim | Slim | Phat | Tool (DevKit) | OFW/HFW/CFW/MFW/SFW
                </span>
                <br></br>
              </span>
            </div>
            <div className={styles.container24}>
              <img alt="image" src="/playground_assets/wii-u.png" className={styles.image12} />
              <span className={styles.text110}>
                <span className={styles.text111}>Nintendo TU0 - TU75 / 1.13.2</span>
                <br></br>
                <span className={styles.text113}>• </span>
                <span className={styles.text114}>Nintendo WIi U</span>
                <br className={styles.text115}></br>
                <span className={styles.text116}>• </span>
                <span className={styles.text117}>Nintendo Switch | OLED (Legacy)</span>
                <br className={styles.text118}></br>
                <span className={styles.text119}>• New Nintendo 3DS (Separated Edition)</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className={styles.container25}>
            <div className={styles.container26}>
              <img
                alt="image"
                src="/playground_assets/netbeans_512px-200h.png"
                className={styles.image13}
              />
              <span className={styles.text121}>
                <span className={styles.text122}>Java Edition Versions: 1.3+</span>
                <br></br>
                <span className={styles.text124}>• </span>
                <span className={styles.text125}>Windows</span>
                <br className={styles.text126}></br>
                <span className={styles.text127}>• </span>
                <span className={styles.text128}>macOS</span>
                <br className={styles.text129}></br>
                <span className={styles.text130}>• </span>
                <span className={styles.text131}>Linux</span>
                <br></br>
              </span>
            </div>
            <div className={styles.container27}>
              <img
                alt="image"
                src="/playground_assets/microsoft_500px-200h.png"
                className={styles.image14}
              />
              <span className={styles.text133}>
                <span className={styles.text134}>Bedrock Edition Versions: 1.0.0+</span>
                <br></br>
                <span className={styles.text136}>• iOS | iPadOS</span>
                <br className={styles.text137}></br>
                <span className={styles.text138}>• Android | ChromeOS</span>
                <br className={styles.text139}></br>
                <span>• Amazon Fire</span>
                <br className={styles.text141}></br>
                <span className={styles.text142}>• Windows</span>
                <br className={styles.text143}></br>
                <span className={styles.text144}>• Linux</span>
                <br></br>
              </span>
            </div>
            <div className={styles.container28}>
              <img
                alt="image"
                src="/playground_assets/download_from_the_cloud_96px%20-%20copy-200h.png"
                className={styles.image15}
              />
              <span className={styles.text146}>
                <span className={styles.text147}>Next-Generation Bedrock Realms</span>
                <br></br>
                <span className={styles.text149}>• Xbox One | S | X</span>
                <br className={styles.text150}></br>
                <span className={styles.text151}>• Xbox Series | S| X</span>
                <br className={styles.text152}></br>
                <span className={styles.text153}>• PlayStation®4 | Slim | Pro</span>
                <br className={styles.text154}></br>
                <span className={styles.text155}>• </span>
                <span className={styles.text156}>PlayStation®5 | Digital</span>
                <br className={styles.text157}></br>
                <span className={styles.text158}>• Nintendo Switch | OLED</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container29}>
        <h1 className={styles.text160}>EASY. FREE. FUN.</h1>
        <span className={styles.text161}>ADD SOMETHING HERE ONE DAY</span>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className={styles.image16}
        />
      </div>
      <div className={styles.container30}>
        <h1 className={styles.text162}>ADD SOMETHING HERE</h1>
        <span className={styles.text163}>ADD SOMETHING HERE ONE DAY</span>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className={styles.image17}
        />
      </div>
      <div className={styles.container31}>
        <h1 className={styles.text164}>ADD SOMETHING HERE</h1>
        <span className={styles.text165}>ADD SOMETHING HERE ONE DAY</span>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className={styles.image18}
        />
      </div>
      <div className={styles.container32}>
        <h1 className={styles.text166}>THE DEVELOPMENT TEAM</h1>
        <div className={styles.container33}>
          <div className={styles.container34}>
            <div className={styles.container35}>
              <span className={styles.text167}>
                <span>
                  View the awesome list of people
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>who contributed to this project!</span>
              </span>
            </div>
            <button className={`${styles.button3} ${appStyles.button}`}>View Team Members</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
