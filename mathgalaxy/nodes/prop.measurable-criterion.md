# 可测性的两条判定准则　`prop.measurable-criterion`
命题：复合保持可测；只需在生成元上验证
layer 7 · 命题 · 可测函数与收敛 · 实变函数+数学分析
[在星图里打开](../#n=prop.measurable-criterion)　·　[节点索引](../index.md)

**(1) 复合**：若 $f : X \to Y$ 是 $(\mathcal{M}, \mathcal{N})$可测、$g : Y \to Z$ 是 $(\mathcal{N}, \mathcal{O})$可测，则 $g \circ  f$ 是 $(\mathcal{M}, \mathcal{O})$可测。

**(2) 只需验证生成元**：若 $\mathcal{N} = \mathcal{M}(\mathcal{E})$，则

$$f : X \to Y\text{ 可测} \iff f^{-1}(E) \in \mathcal{M}\quad  \forall E \in \mathcal{E}$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.measurable-criterion.2.md](./prop.measurable-criterion.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/prop.measurable-criterion.3.md](./prop.measurable-criterion.3.md)

refs: Folland, Real Analysis, Prop. 2.1

> 说明见 `notes/prop.measurable-criterion.md`

引用：`prop.measurable-criterion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
