# 可测性的两条判定准则　`prop.measurable-criterion`
命题：复合保持可测；只需在生成元上验证
layer 7 · 命题 · 可测函数与收敛 · 分析学

**(1) 复合**：若 $f : X \to Y$ 是 $(\mathcal{M}, \mathcal{N})$可测、$g : Y \to Z$ 是 $(\mathcal{N}, \mathcal{O})$可测，则 $g \circ  f$ 是 $(\mathcal{M}, \mathcal{O})$可测。

**(2) 只需验证生成元**：若 $\mathcal{N} = \mathcal{M}(\mathcal{E})$，则
> 陈述续见 `nodes/prop.measurable-criterion.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.measurable-function` 可测函数：用到了定义 可测函数　proofs/def-link.measurable-criterion.md

## 它能推出什么 / 谁在用它
- ⇒ `cor.continuous-measurable` 连续 ⟹ Borel 可测

refs: Folland, Real Analysis, Prop. 2.1

> 说明见 `notes/prop.measurable-criterion.md`
