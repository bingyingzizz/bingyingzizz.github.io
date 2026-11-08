# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

其中 $\theta=k t_{0}\log p$，末步用 $3+4\cos\theta+\cos2\theta=2(1+\cos\theta)^{2}\ge0$。反设 $\zeta(1+it_{0})=0$（$t_{0}\ne0$）。当 $\sigma\to1^{+}$：$3\log\zeta(\sigma)=-3\log(\sigma-1)+O(1)$（单极点留数 $1$）；$4\log|\zeta(\sigma+it_{0})|=4m_{1}\log(\sigma-1)+O(1)$（$m_{1}\ge1$ 为该零点阶）；$\log|\zeta(\sigma+2it_{0})|=m_{2}\log(\sigma-1)+O(1)$（$m_{2}\ge0$，非零点取 $0$）。代入得左端 $=(4m_{1}+m_{2}-3)\log(\sigma-1)+O(1)$；由 $4m_{1}+m_{2}-3\ge1$ 且 $\log(\sigma-1)\to-\infty$，左端 $\to-\infty$，与 $\ge0$ 矛盾。（零点阶展开：$s_{0}$ 为 $m$ 阶零点时 $\zeta(s)=c(s-s_{0})^{m}+O((s-s_{0})^{m+1})$，$c\ne0$，故 $\log|\zeta(\sigma+it_{0})|=m\log(\sigma-1)+O(1)$。）$t_{0}=0$ 处是极点不是零点。于是 $\zeta$ 在 $\operatorname{Re}s=1$ 上无零点。∎

> 续见 notes/thm.prime-number-theorem.6.md
