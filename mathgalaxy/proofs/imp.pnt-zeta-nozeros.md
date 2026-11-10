# $3+4\cos\theta+\cos2\theta\ge0$ 加权
`imp.pnt-zeta-nozeros` · 推出 · strong 边 · 根 `../`

`thm.euler-product` Euler 乘积 + `prop.zeta-continuation` ζ 的亚纯延拓（到 Re s>0） + `def.riemann-zeta` 黎曼 ζ 函数 → `thm.zeta-no-zeros-line1` ζ 在 Re s=1 上无零点

对 $\sigma>1$，Euler 乘积取对数：$\log\zeta(\sigma+it)=\sum_{p}\sum_{k\ge1}\frac{1}{k}p^{-k\sigma}e^{-ikt\log p}$。取 $t=0,t_{0},2t_{0}$ 的实部并按 $3,4,1$ 加权，得

$$3\log\zeta(\sigma)+4\log|\zeta(\sigma+it_{0})|+\log|\zeta(\sigma+2it_{0})|=\sum_{p,k}\frac{1}{k}p^{-k\sigma}\bigl(3+4\cos\theta+\cos2\theta\bigr)\ge0,$$

其中 $\theta=kt_{0}\log p$，末步用 $3+4\cos\theta+\cos2\theta=2(1+\cos\theta)^{2}\ge0$。

> 续见 proofs/imp.pnt-zeta-nozeros.2.md
