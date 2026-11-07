# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

其中 $\theta=k t_{0}\log p$，末步用 $3+4\cos\theta+\cos2\theta=2(1+\cos\theta)^{2}\ge0$。反设 $\zeta(1+it_{0})=0$（$t_{0}\ne0$）。当 $\sigma\to1^{+}$：$3\log\zeta(\sigma)=-3\log(\sigma-1)+O(1)$（单极点留数 $1$）；$4\log|\zeta(\sigma+it_{0})|\le4\log(\sigma-1)+O(1)$（零点阶 $\ge1$）；$\log|\zeta(\sigma+2it_{0})|=O(|\log(\sigma-1)|)$（$1+2it_{0}\ne1$，该点至多零点或全纯点）。故左端 $\le C+2\log(\sigma-1)\to-\infty$，与 $\ge0$ 矛盾；$t_{0}=0$ 处是极点不是零点。于是 $\zeta$ 在 $\operatorname{Re}s=1$ 上无零点。∎

**命题 B（唯一缺口）：Newman 的 Tauber 定理。** 设 $A:[1,\infty)\to\mathbb{R}$ 非负、单调不减，$F(s)=\int_{1}^{\infty}A(t)\,t^{-s-1}\,\mathrm{d}t$ 在 $\operatorname{Re}s>1$ 收敛，并解析延拓到 $\{\operatorname{Re}s\ge1\}$ 的一个邻域，除 $s=1$ 处单极点、留数 $1$ 外全纯。则 $A(x)\sim x$。

> 续见 notes/thm.prime-number-theorem.6.md
