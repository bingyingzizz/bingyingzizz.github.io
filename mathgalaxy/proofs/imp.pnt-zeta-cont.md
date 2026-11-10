# 分部求和给出 $\zeta(s)=s/(s-1)-s\int\{x\}x^{-s-1}dx$
`imp.pnt-zeta-cont` · 推出 · strong 边 · 根 `../`

`def.riemann-zeta` 黎曼 ζ 函数 → `prop.zeta-continuation` ζ 的亚纯延拓（到 Re s>0）

对 $\operatorname{Re}s>1$ 与整数 $N$，分部求和（对 $\lfloor x\rfloor$ 作 Stieltjes 积分）给



$$\sum_{n\le N}n^{-s}=N^{1-s}+s\int_{1}^{N}\lfloor x\rfloor\,x^{-s-1}\,\mathrm{d}x.$$



令 $N\to\infty$；因 $\operatorname{Re}s>1$，$N^{1-s}\to0$。再写 $\lfloor x\rfloor=x-\{x\}$：



$$\zeta(s)=s\int_{1}^{\infty}x\cdot x^{-s-1}\,\mathrm{d}x-s\int_{1}^{\infty}\{x\}x^{-s-1}\,\mathrm{d}x=\frac{s}{s-1}-s\int_{1}^{\infty}\{x\}x^{-s-1}\,\mathrm{d}x.$$



右端积分在 $\operatorname{Re}s>0$ 上绝对收敛（被 $x^{-\operatorname{Re}s-1}$ 控制），故给出 $\operatorname{Re}s>0$ 上的亚纯延拓；唯一极点是 $s=1$，来自 $s/(s-1)$，留数 $1$。∎
