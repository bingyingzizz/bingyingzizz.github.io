# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**第七步：$h$ 是多项式（完整）。** 由第四步，在 $|z|\le R$ 上 $\operatorname{Re}(h-h(0))\le C_{1}R^{\rho+\varepsilon_{1}}+|\operatorname{Re}h(0)|=:A$。对 $g=h-h(0)$ 用第六步，取 $r=R/2$：$|h(z)-h(0)|\le2A$（$|z|\le R/2$）。再由 Cauchy 估计（`thm.cauchy-inequality`），对 $k>\rho+\varepsilon_{1}$：$|h^{(k)}(0)|\le k!\,2A/(R/2)^{k}\to0$（$R\to\infty$），故 $h^{(k)}(0)=0$：$h$ 是次数 $\le\lfloor\rho\rfloor$ 的多项式。

**结论**：$f=z^{m}e^{h}\prod_{n}E_{p}(z/a_{n})=z^{m}e^{P}\prod_{n}E_{p}(z/a_{n})$，即得 Hadamard 分解。∎ 第一至第七步全部写完：第一、二、三步是收敛与消零点，第四步是好半径 + 初等估计 + Borel–Carathéodory，第五、六、七步把无零点商提升成多项式指数。

> 续见 notes/thm.hadamard-factorization.8.md
