# Radon 测度　`def.radon-measure`
Radon 测度：局部有限的 Borel 测度，外正则 + 开集内正则
layer 16 · 定义 · 测度的构造 · 实变函数+数学分析
[在星图里打开](../#n=def.radon-measure)　·　[节点索引](../index.md)

设 $X$ 是局部紧 Hausdorff 空间。$X$ 上的 **Radon 测度** 是 Borel 测度 $\mu$，满足：

1. **局部有限**：每个 $x \in X$ 有开邻域 $U$ 使 $\mu(U) < \infty$（局部紧 Hausdorff 上等价于紧集上有限）。
2. **外正则**：对每个 Borel 集 $E$，$\mu(E) = \inf\{\mu(U) : E \subseteq U,\ U\ \text{开}\}$。
3. **开集上内正则**：对每个开集 $U$，$\mu(U) = \sup\{\mu(K) : K \subseteq U,\ K\ \text{紧}\}$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.radon-measure.2.md](./def.radon-measure.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.radon-measure.3.md](./def.radon-measure.3.md)

refs: Folland, Real Analysis, §7.1；Rudin, Real and Complex Analysis, Ch. 2

> 说明见 `notes/def.radon-measure.md`

引用：`def.radon-measure`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
