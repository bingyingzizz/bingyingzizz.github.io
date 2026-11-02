# 米田嵌入与 Stone–Čech 紧化：都是「嵌进一个大得多的世界」
`ana.embed-better-world` · 类比（弱边） · weak 边 · 根 `../`

`prop.yoneda-embedding` 米田嵌入 → `prop.chaus-reflective` 紧 Haus 是反射子范畴

两件事在数学上没有谁推出谁（一个是范畴嵌入，一个是拓扑紧化），但**招数是同一个**：
**手上这个对象缺东西，就先把它嵌进一个大环境，在那里把活干完，再回到原地。**

**米田嵌入**：$\mathcal{C} \hookrightarrow \widehat{\mathcal{C}}$。
$\mathcal{C}$ 里可能连两个对象的积都没有；$\widehat{\mathcal{C}}$ 里**什么极限余极限都有**。
所以在 $\mathcal{C}$ 里造不出来的东西，搬到 $\widehat{\mathcal{C}}$ 里造（稠密性定理就是把它拆成 $h_{X}$ 的余极限）。

> 续见 proofs/ana.embed-better-world.2.md
