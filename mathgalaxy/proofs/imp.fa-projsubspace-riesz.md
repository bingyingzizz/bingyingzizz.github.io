# 正交分解 $\implies$ Riesz 表示
`imp.fa-projsubspace-riesz` · 推出 · strong 边 · 根 `../`

`thm.projection-subspace` 闭子空间的正交投影 → `thm.riesz-hilbert` Riesz 表示定理（Hilbert 版）

$\varphi = 0$ 取 $y = 0$。否则 $E := \ker\varphi$ 是闭真子空间，由正交分解取 $0 \ne z \in E^\perp$。
令 $y := \overline{\varphi(z)}\,z/\|z\|^2$。对 $x = e + \lambda z$（$e \in E$）：$\langle x, y\rangle = \lambda\langle z, y\rangle = \lambda\varphi(z) = \varphi(\lambda z) = \varphi(x)$。
范数：$|\varphi(x)| = |\langle x,y\rangle| \le \|x\|\,\|y\|$ 给 $\|\varphi\| \le \|y\|$；取 $x = y/\|y\|$ 得 $\varphi(x) = \|y\|$，故相等。唯一性：差 $\perp H$ 故为零。$\blacksquare$

> 只用了三件事：$\ker\varphi$ 闭、正交分解、共轭线性的约定。
