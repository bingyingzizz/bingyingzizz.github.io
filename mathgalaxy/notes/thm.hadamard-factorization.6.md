# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**第七步：$h$ 是多项式（完整，条件于第四步）。** 由第四步，$\operatorname{Re}(h-h(0))=\log|\Phi|-\operatorname{Re} h(0)\le C R^{\rho+\varepsilon}$。对 $g=h-h(0)$ 在 $|z|\le R$ 用第六步，取 $r=R/2$：$|h(z)-h(0)|\le 2C R^{\rho+\varepsilon}$（$|z|\le R/2$）。再由 Cauchy 估计（`thm.cauchy-inequality`），对 $k>\rho$，$|h^{(k)}(0)|\le k!\,C R^{\rho+\varepsilon}/(R/2)^{k}\to 0$（$R\to\infty$，取 $\varepsilon<k-\rho$），故 $h^{(k)}(0)=0$：$h$ 是次数 $\le\lfloor\rho\rfloor$ 的多项式。

**结论**：补上第四步的下界引理（Poisson–Jensen 配对）后，就有 $f=z^{m}e^{h}\prod_{n}E_{p}(z/a_{n})=z^{m}e^{P}\prod_{n}E_{p}(z/a_{n})$，即得 Hadamard 分解。⚠ 本节点**仍标 skeleton**：缺口已钉到「典范乘积下界引理」；第一、二、三、五、六、七步都已写全。

> 续见 notes/thm.hadamard-factorization.7.md
