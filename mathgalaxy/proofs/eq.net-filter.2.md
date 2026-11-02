# 网收敛与滤子收敛等价
`eq.net-filter` · 等价 · strong 边 · 根 `../`

`def.net` 网 → `def.filter` 滤子

$$\Lambda := \{\, (F, x) : F \in \mathcal{F},\ x \in F \,\} , \qquad (F, x) \le (G, y) \iff G \subseteq F .$$

任意两个 $(F, x), (G, y)$ 有上界 $(F \cap G, z)$（$F \cap G \ne \emptyset$，取其中任一点 $z$）✓，故 $\Lambda$ 是有向集。令 $x_{(F,x)} := x$，得到网。

**收敛一致**：若 $\mathcal{F} \to x$，则每个邻域 $U \ni x$ 属于 $\mathcal{F}$；取 $\lambda_{0} = (U, x)$，则 $(F, y) \ge (U, x)$ 时 $F \subseteq U$ 且 $y \in F \subseteq U$，故 $x_{(F,y)} \in U$，即网收敛到 $x$ ✓。反向由上一条同理。

⛔ 附件：**超滤子 $\leftrightarrow$ 极大网**（不能进一步加粗的网）也一一对应。

> 两套语言等价：一个是「指标集 + 最终落在」，一个是「集合族 + 包含」。分析书多用网，集合论与拓扑书多用滤子。
