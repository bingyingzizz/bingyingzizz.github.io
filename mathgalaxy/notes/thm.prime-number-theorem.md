# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**本节点只给陈述、记号与依赖链；完整证明在组装边与各自节点的入边，不写回本注。**

**记号**：$\Lambda(n)=\log p$（$n=p^{k}$）或 $0$（其它），$\psi(x)=\sum_{n\le x}\Lambda(n)$、$\theta(x)=\sum_{p\le x}\log p$、$\pi(x)=\#\{p\le x\}$（见 `def.prime-counting`）。

**依赖链**： 1. `lem.psi-theta-sum`：$\psi(x)=\sum_{k\ge1}\theta(x^{1/k})$；`lem.psi-theta-asymptotic`：$\psi-\theta=o(x)$，故 $\psi\sim x\iff\theta\sim x$。 2. `lem.abel-theta-pi`：Abel 变换两式；`lem.theta-pi-equivalence`：$\theta\sim x\iff\pi\sim x/\log x$。 3. `prop.zeta-continuation`：$\zeta$ 亚纯延拓到 $\operatorname{Re}s>0$、唯一单极点 $s=1$ 留数 $1$；`thm.zeta-no-zeros-line1`：$\zeta(1+it)\ne0$。 4. `lem.newman-tauberian`：Newman 解析定理；由它得 $\int_0^\infty(\psi(e^t)e^{-t}-1)\,\mathrm{d}t$ 收敛，再由 $\psi$ 的单调性夹逼得 $\psi(x)\sim x$。

> 续见 notes/thm.prime-number-theorem.2.md
