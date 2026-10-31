# 维数消失刻画 + 阿贝尔群只有 $0$、$1$ 次 Ext $\implies$ 主理想整环的整体维数
`imp-link.pdvan-gldimpid` · 推出 · strong 边 · 根 `../`

`prop.pd-vanishing` 投射维数与消失 + `prop.ext-abelian-groups` 阿贝尔群的 Ext → `cor.gldim-pid` 主理想整环的整体维数

主理想整环上，任取自由模盖住 $M$，其核是自由模的子模、仍自由，故 $M$ 有长度 $1$ 的自由消解 ✓。由「投射维数与消失刻画」的 $(2) \implies (1)$，$\operatorname{pd}_{R}M \le 1$ 对一切 $M$ ✓，故 $\operatorname{gl.dim} R \le 1$ ✓。
$\mathbb{Z}$ 上「只有 $0$、$1$ 次 Ext」那条命题说的正是「$\operatorname{Ext}^{n}(-, -) = 0$ 对一切 $n \ge 2$」，由消失刻画这等价于「所有模的投射维数不超过 $1$」✓ —— 两条是同一句话。
再定值：$R$ 是域时每个模自由，$\operatorname{pd} = 0$，$\operatorname{gl.dim} = 0$ ✓；$R$ 不是域时取非零非单位的 $a$，$R/(a)$ 不投射（否则 $(a)$ 是 $R$ 的直和项，而整环里没有非平凡幂等元），故 $\operatorname

> 续见 proofs/imp-link.pdvan-gldimpid.2.md
