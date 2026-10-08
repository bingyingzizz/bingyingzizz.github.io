# 局部化　`def.localization`
范畴的局部化（Localization）
layer 10 · 定义 · 范畴与图 · 范畴论

设 $\mathcal{C}$ 是范畴，$W$ 是 $\mathcal{C}$ 中一族态射（想「当成同构」的那些）。$\mathcal{C}$ 关于 $W$ 的**局部化** $\mathrm{ho}(\mathcal{C})$ 是这样一个范畴，连同函子 $\gamma : \mathcal{C} \to \mathrm{ho}(\mathcal{C})$：

1. 对每个 $w \in W$，$\gamma(w)$ 是同构；
2. **泛性质**：对任何函子 $F : \mathcal{C} \to \mathcal{D}$ 使每个 $w \in W$ 的像都是同构，存在唯一的 $\overline{F} : \mathrm{ho}(\mathcal{C}) \to \mathcal{D}$ 使 $\overline{F} \circ \gamma = F$。

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.localization-functor.md
- `def.section-retraction` 截面与收缩：用到了定义 截面与收缩　proofs/def-dep.localization-iso.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.localization-nattrans.md

> 说明见 `notes/def.localization.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/def.localization.2.md`
