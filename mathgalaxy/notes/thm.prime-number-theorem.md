# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

⚠️ **本节点仍标 skeleton**，但缺口已缩到一个：命题 B（Newman 的 Tauber 定理）。引理 1–4 与命题 A（$\zeta$ 的解析延拓 + $\operatorname{Re}s=1$ 上无零点）在本注中已给完整证明；补上命题 B 即得素数定理。

**记号**：$\Lambda(n)=\log p$（$n=p^{k}$）或 $0$（其它），$\psi(x)=\sum_{n\le x}\Lambda(n)$、$\theta(x)=\sum_{p\le x}\log p$、$\pi(x)=\#\{p\le x\}$。

**引理 1（$\psi$ 与 $\theta$ 的关系）**：$\psi(x)=\sum_{k\ge1}\theta\bigl(x^{1/k}\bigr)$。证明：按 $n=p^{k}$ 的 $k$ 分组，$p^{k}\le x\iff p\le x^{1/k}$，每组贡献 $\log p$，求和即得。

**引理 2（$\psi\sim x\iff\theta\sim x$）**：由引理 1，$0\le\psi(x)-\theta(x)=\sum_{k=2}^{\lfloor\log_{2}x\rfloor}\theta\bigl(x^{1/k}\bigr)\le(\log_{2}x)\,\theta\bigl(\sqrt{x}\bigr)\le(\log_{2}x)\,\sqrt{x}\,\log x=o(x)$（用 $\theta(y)\le y\log y$），故 $\psi(x)=\theta(x)+o(x)$。

> 续见 notes/thm.prime-number-theorem.2.md
