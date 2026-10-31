# 切空间　`def.tangent-space-manifold`　·　续页（第 2 页）
[在星图里打开](../#n=def.tangent-space-manifold)　·　第 1 页 [nodes/def.tangent-space-manifold.md](./def.tangent-space-manifold.md)

## 陈述（续）
向。
设 $M$ 是 $n$ 维光滑流形，$p\in M$。两条过 $p$ 的曲线 $\gamma_{1},\gamma_{2} : (-\varepsilon,\varepsilon)\to M$（$\gamma_{i}(0) = p$）叫**在 $p$ 处相切**，如果存在（等价地：对每
张）含 $p$ 的卡 $(U,\varphi)$ 有
$$(\varphi\circ\gamma_{1})'(0) = (\varphi\circ\gamma_{2})'(0) .$$
「存在一张卡」与「对每张卡」等价，因为换卡只差一个链式法则因子。这个等价类叫 $p$ 处的一个**切向量**，全体记 $T_{p}M$。
在卡 $(U,\varphi)$ 里记 $x^{i} := \varphi^{i}$、$\partial_{i} := \partial/\partial x^{i}$。取曲线 $t\mapsto\varphi^{-1}\bigl(\varphi(p)+t\,e_{i}\bigr)$ 的类，记作 $\partial_{i}(
p)$。这 $n$ 个切向量两两不同、线性无关，构成 $T_{p}M$ 的一组基，于是 $\dim T_{p}M = n$。

> 续见 [nodes/def.tangent-space-manifold.3.md](./def.tangent-space-manifold.3.md)
