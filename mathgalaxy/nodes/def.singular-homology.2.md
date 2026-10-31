# 奇异同调群　`def.singular-homology`　·　续页（第 2 页）
[在星图里打开](../#n=def.singular-homology)　·　第 1 页 [nodes/def.singular-homology.md](./def.singular-homology.md)

## 陈述（续）
**不要求**单射、不要求是嵌入、可以自交、可以把整个 $\Delta^{p}$ 压成一点。全体奇异 $p$-单纯形为基的自由阿贝尔群记 $S_{p}(X)$（**奇异链群**）。边缘算子由面映射给出：

$$\partial_{p}\sigma := \sum_{i=0}^{p} (-1)^{i}\,\sigma \circ d_{i},$$
同样满足 $\partial^{2} = 0$（因为 $d_{j}d_{i} = d_{i}d_{j-1}$ 与单纯情形逐字相同）。于是

$$H_{p}(X) := \ker\partial_{p}\, \big/\, \operatorname{im}\partial_{p+1}$$

叫 $X$ 的**$p$ 维奇异同调群**。
**函子性**：连续映射 $f : X \to Y$ 给出链映射 $f_{\#}(\sigma) := f \circ \sigma$，它满足 $f_{\#}\partial = \partial f_{\#}$，故诱导 $f_{*} : H_{p}(X) \to H_{p}(Y)$；并且 $(1_{X})_{*} = \operatorname{id}$、$(g \ci
rc f)_{*} = g_{*} \circ f_{*}$。同伦的映射诱导相同的映射：$f \simeq g \implies f_{*} = g_{*}$。

> 续见 [nodes/def.singular-homology.3.md](./def.singular-homology.3.md)
