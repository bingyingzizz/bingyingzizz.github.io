# $3+4\cos\theta+\cos2\theta\ge0$ 加权
`imp.pnt-zeta-nozeros` · 推出 · strong 边 · 根 `../`

`thm.euler-product` Euler 乘积 + `prop.zeta-continuation` ζ 的亚纯延拓（到 Re s>0） + `def.riemann-zeta` 黎曼 ζ 函数 → `thm.zeta-no-zeros-line1` ζ 在 Re s=1 上无零点

反设 $\zeta(1+it_{0})=0$（$t_{0}\ne0$）。当 $\sigma\to1^{+}$：$3\log\zeta(\sigma)=-3\log(\sigma-1)+O(1)$（单极点留数 $1$）；$4\log|\zeta(\sigma+it_{0})|=4m_{1}\log(\sigma-1)+O(1)$（$m_{1}\ge1$ 为零点阶）；$\log|\zeta(\sigma+2it_{0})|=m_{2}\log(\sigma-1)+O(1)$（$m_{2}\ge0$，非零点取 $0$）。代入得左端 $(4m_{1}+m_{2}-3)\log(\sigma-1)+O(1)$；因 $4m_{1}+m_{2}-3\ge1$ 且 $\log(\sigma-1)\to-\infty$，左端 $\to-\infty$，与 $\ge0$ 矛盾。$t_{0}=0$ 处是极点不是零点。∎
