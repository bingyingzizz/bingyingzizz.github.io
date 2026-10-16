# 正合列给出导出三角　`prop.exact-to-triangle`　·　说明
根 `../`

本质上是说：这个短正合列「就是」某个映射锥三角（在 $D(\mathcal{A})$ 里同构于 $K^{\bullet} \xrightarrow{f} L^{\bullet} \to M(f) \to K^{\bullet}[1]$）。

**证明。** 由映射锥的显式写法（$M(f)^{n} = L^{n}\oplus K^{n+1}$），复合
$$M(f)^{n} \longrightarrow L^{n} \xrightarrow{\;g\;} M^{n}$$
是复形态射（把 $L^{n}$ 那一块投过去），记作 $\varphi : M(f)^{\bullet} \to M^{\bullet}$。于是有复形的短正合列
$$0 \to M(\mathrm{id}_{K^{\bullet}})^{\bullet} \longrightarrow M(f)^{\bullet} \xrightarrow{\;\varphi\;} M^{\bullet} \to 0 .$$
而 $M(\mathrm{id}_{K^{\bullet}})$ 是**零调**的（$\mathrm{id}_{K}$ 是拟同构；显式看就是可缩复形）。取长正合列，两头零调把首尾杀掉，读出 $\varphi$ 是**拟同构** —— 于是它在 $D(\mathcal{A})$ 里是同构，三角 $K^{\bullet} \xrightarrow{f} L^{\bullet} \to M(f)^{\bullet} \to K^{\bullet}[1]$ 与要的那条同构。∎

> 续见 notes/prop.exact-to-triangle.2.md
