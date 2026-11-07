# Riemann–Hurwitz 公式　`thm.riemann-hurwitz`　·　说明
根 `../`

「这是 CW 剖分」需要说明 2-胞腔的闭包是闭圆盘：在分歧点的模型 $z \mapsto z^{e}$ 下，$e$ 个扇区（2-胞腔）共享顶点 $q$，每个扇区的闭包是一个闭三角形，$e$ 个扇区拼成 $q$ 的一个邻域圆盘；在非分歧点同理。于是每个 2-胞腔的闭包是闭圆盘，贴合映射连续，确实给出有限 CW 结构。

**收尾**：CW 剖分的 Euler 示性数按胞腔数计算，

$$\chi(Y) = V_{Y} - E_{Y} + F_{Y} = d(V_{X} - E_{X} + F_{X}) - R = d\,\chi(X) - R.$$

再用 `prop.eulerchar-genus` 把 $\chi(X) = 2 - 2g_{X}$、$\chi(Y) = 2 - 2g_{Y}$ 代入，即得 $2g_{Y} - 2 = d(2g_{X} - 2) + R$。∎

**等号条件（$g_{Y} = g_{X}$ 到底什么时候成立）**：由 $2g_{Y} - 2 = d(2g_{X} - 2) + R$，$g_{Y} = g_{X}$ 等价于

$$d\,(2g_{X} - 2) + R = 2g_{X} - 2,\qquad\text{即}\qquad (d - 1)(2g_{X} - 2) = -R.$$

因为 $d \ge 1$、$R \ge 0$，分三种情形：

- $g_{X} \ge 2$：$(d - 1)(2g_{X} - 2) \ge 0$，要等于 $-R \le 0$，只能 $d = 1$ 且 $R = 0$（双全纯）。

> 续见 notes/thm.riemann-hurwitz.5.md
