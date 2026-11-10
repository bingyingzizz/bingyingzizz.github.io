# 把 $x$ 换成 $x/\log x$：两个方向
`imp.pnt-lemma4` · 推出 · strong 边 · 根 `../`

`lem.abel-theta-pi` θ 与 π 的 Abel 变换 → `lem.theta-pi-equivalence` θ~x 与 π~x/log x 等价

设 $\theta(x)\sim x$。由 `lem.abel-theta-pi` 第二式，



$$\pi(x)=\frac{x(1+o(1))}{\log x}+\int_{2}^{x}\frac{t(1+o(1))}{t\log^{2}t}\,\mathrm{d}t=\frac{x}{\log x}(1+o(1)),$$



其中 $\int_{2}^{x}\mathrm{d}t/\log^{2}t=o(x/\log x)$（对 $t/\log^{2}t$ 分部积分，主项是 $\operatorname{li}(x)=o(x)$ 的低阶修正；等价地，$\int_{2}^{x}\mathrm{d}t/\log^{2}t\le x/\log^{2}x+\int_{2}^{x}\mathrm{d}t/\log^{3}t$，归纳即得）。



反向设 $\pi(x)\sim x/\log x$。由第一式，



$$\theta(x)=\pi(x)\log x-\int_{2}^{x}\frac{t(1+o(1))/\log t}{t}\,\mathrm{d}t=x(1+o(1))-\int_{2}^{x}\frac{1+o(1)}{\log t}\,\mathrm{d}t=x(1+o(1)),$$



因为 $\int_{2}^{x}\mathrm{d}t/\log t=o(x)$。两个方向合起来即得等价。∎
