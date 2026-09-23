# Hausdorff 极大原理　`thm.hausdorff`
Hausdorff 极大原理 / 极大公理（Hausdorff Maximal Principle, 1914）
layer 9 · 定理 · 选择原理 · 序理论

设 $(P, \preceq )$ 是偏序集，$C_{0} \subseteq P$ 是链。则存在 $P$ 的**极大链** $M$ 使 $C_{0} \subseteq M$。
> 陈述续见 `nodes/thm.hausdorff.2.md`


## 为什么成立（入边，证明在 proofs/）
- `lem.zorn` 佐恩引理：佐恩引理 $\iff$ Hausdorff 极大原理　proofs/eq.zorn-hausdorff.md
- `lem.tukey` Tukey 引理：Hausdorff 极大原理 $\iff$ Tukey 引理　proofs/eq.hausdorff-tukey.md
- `def.poset` 偏序集：用到了定义 偏序集　proofs/def-link.hausdorff-poset.md
- `def.chain` 链：用到了定义 链　proofs/def-link.hausdorff-chain.md

## 它能推出什么 / 谁在用它
- ⟺ `lem.zorn` 佐恩引理
- ⟺ `lem.tukey` Tukey 引理

refs: Hausdorff (1914)；Kunen, Set Theory, I.12

## 说明
形式上它比佐恩引理更早（Hausdorff, 1914），并且与佐恩引理等价。

极大链的存在性正是「从下往上一点点加元素直到加不动」这一直觉的严格化。
