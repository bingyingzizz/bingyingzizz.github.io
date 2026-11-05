# 单纯映射　`def.simplicial-map`　·　续页（第 2 页）
[在星图里打开](../#n=def.simplicial-map)　·　第 1 页 [nodes/def.simplicial-map.md](./def.simplicial-map.md)

## 陈述（续）
$$|f|\left(\sum_{v} t_{v} v\right) := \sum_{v} t_{v} f(v),$$

这是一个连续映射 $|K| \to |L|$。
**诱导链映射**：在链群上定义 $\varphi_{\#} : C_{p}(K) \to C_{p}(L)$，对 $p$-单纯形 $\sigma = [v_{0}, \ldots, v_{p}]$：
若 $f(\sigma)$ 是 $p$ 维，则 $\varphi_{\#}(\sigma) := \operatorname{sgn}(\tau)\cdot [f(
v_{0}), \ldots, f(v_{p})]$——**先去重、再按全序重排**，$\tau$ 就是这次重排的排列，$\operatorname{sgn}$ **不能丢**（$f(0) = 1, f(1) = 0$：像的顶点列是 $[1,0]$，重排成 $[0,1]$ 要乘 $-1$；不补符号则 $\varphi_{\#}\partial \ne \partial
\varphi_{\#}$）；若 $\dim f(\sigma) < p$，则 $\varphi_{\#}(\sigma) := 0$。再线性延拓。它满足 $\varphi_{\#} \circ \partial = \partial \circ \varphi_{\#}$，因此过商给出

> 续见 [nodes/def.simplicial-map.3.md](./def.simplicial-map.3.md)
