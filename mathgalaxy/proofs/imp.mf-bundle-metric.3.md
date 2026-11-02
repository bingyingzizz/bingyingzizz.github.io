# 局部内积做凸组合 $\implies$ 每个向量丛都有纤维度量
`imp.mf-bundle-metric` · 推出 · strong 边 · 根 `../`

`def.vector-bundle` 向量丛 + `thm.smooth-partition-unity` 光滑单位分解 → `prop.bundle-metric` 纤维度量

**为什么这条对极性敏感。** 上面只用到两件事：**内积的全体是凸集**（非负权重的加权平均仍是内积），以及**局部总存在**。复结构要求 $J^{2} = -\operatorname{id}$（不是凸条件）、辛结构要求 $\omega$ 闭（闭性对凸组合仍保持，但非退化不保持），所以它们不能靠这一招造出来。∎

⭐ 这条与 `def.riemannian-metric` 的 notes 里那句「每个光滑流形都能配黎曼度量」是同一个证明，只是把 $E$ 从 $TM$ 换成任意丛。
