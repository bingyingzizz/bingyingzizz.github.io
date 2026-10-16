# L⁺　`def.lplus`
$L^{+}$：非负可测函数全体
layer 15 · 定义 · 积分 · 分析学
[在星图里打开](../#n=def.lplus)　·　[节点索引](../index.md)

固定测度空间 $(X, \mathcal{M}, \mu )$。记

$$L^+ := \{ f : X \to [0, +\infty] : f\text{ 可测} \}$$

即取值在**扩充**非负实数里的可测函数全体。

## 为什么成立（入边，证明在 proofs/）
- [`def.measurable-function`](../nodes/def.measurable-function.md) 可测函数：用到了定义 可测函数　[proofs/def-dep.measurable-fn-lplus.md](../proofs/def-dep.measurable-fn-lplus.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.lplus.3.md](./def.lplus.3.md)

refs: Folland, Real Analysis, §2.2

- …另有入边，续页见 [nodes/def.lplus.2.md](./def.lplus.2.md)

## 说明
⚠ 取值允许是 $\infty$，这是刻意的：先把积分对 $[0, +\infty ]$ 值的函数定义好，收敛定理（sup / 极限）在整个 $L^{+}$ 里封闭，不必反复讨论「积分是不是有限」。

「可积」（积分有限）是之后单独加的条件，见 $L^{1}$ 的定义。

引用：`def.lplus`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
