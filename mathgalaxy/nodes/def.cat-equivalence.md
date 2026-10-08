# 范畴等价　`def.cat-equivalence`
范畴等价（Equivalence of Categories）
layer 10 · 定义 · 函子与自然变换 · 范畴论

函子 $F : \mathcal{C} \to \mathcal{C}'$ 叫**范畴等价**，如果存在函子 $G : \mathcal{C}' \to \mathcal{C}$ 与自然同构

$$F \circ G \cong 1_{\mathcal{C}'}, \qquad G \circ F \cong 1_{\mathcal{C}}$$

这时记 $\mathcal{C} \simeq \mathcal{C}'$。若把两个 $\cong$ 加强成等号 $F \circ G = 1_{\mathcal{C}'}$、$G \circ F = 1_{\mathcal{C}}$，则叫**范畴同构**，记 $\mathcal{C} \cong \mathcal{C}'$。

## 为什么成立（入边，证明在 proofs/）
- `def.ff-faithful` 忠实 / 满 / 全忠实 + `def.essentially-surjective` 本质满：全忠实 $+$ 本质满 $\implies$ 范畴等价　proofs/imp.equiv-criterion.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-equivalence.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-equivalence.md

> 说明见 `notes/def.cat-equivalence.md`
