# 反射子范畴里的极限　`prop.reflective-limits`
反射子范畴中的极限与余极限
layer 12 · 命题 · 伴随与反射 · 范畴论

设 $\mathcal{C}'$ 是 $\mathcal{C}$ 的反射子范畴，反射记为 $F : \mathcal{C} \to \mathcal{C}'$。若 $\mathcal{C}'$ 中的图 $D'$ 在 $\mathcal{C}$ 中有极限（余极限），则它在 $\mathcal{C}'$ 中也有：
> 陈述续见 `nodes/prop.reflective-limits.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-link.limit-reflective.md
- `def.reflective-subcategory` 反射子范畴：用到了定义 反射子范畴　proofs/def-dep.reflective-limits.md
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-reflective.md

## 说明
也就是说，**反射子范畴对极限封闭**。这条让「先在大的范畴里算，再看能不能落回去」成为标准操作：余极限要回炉过一次反射，极限则不用。
