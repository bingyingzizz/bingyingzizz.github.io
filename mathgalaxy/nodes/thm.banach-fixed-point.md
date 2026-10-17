# 压缩映射原理　`thm.banach-fixed-point`
定理（Banach）：完备度量空间上的压缩映射有唯一不动点
layer 15 · 定理 · 多元微分 · 分析学
[在星图里打开](../#n=thm.banach-fixed-point)　·　[节点索引](../index.md)

设 $(X, d)$ 是**完备**度量空间（`def.complete`），$T : X \to X$ 是以 $q < 1$ 为系数的压缩映射（`def.contraction`）。则
> 陈述续见 [nodes/thm.banach-fixed-point.2.md](./thm.banach-fixed-point.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.contraction`](../nodes/def.contraction.md) 压缩映射 + [`def.complete`](../nodes/def.complete.md) 完备：压缩 + 完备 $\implies$ 唯一不动点（含误差估计）　[proofs/imp.banach-fixed-point.md](../proofs/imp.banach-fixed-point.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.banach-fixed-point.3.md](./thm.banach-fixed-point.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Zeidler, Nonlinear Functional Analysis I, Ch. 1

> 说明见 `notes/thm.banach-fixed-point.md`

引用：`thm.banach-fixed-point`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
