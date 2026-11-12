# 陈–Weil 同态　`thm.chern-weil`　·　续页（第 2 页）
[在星图里打开](../#n=thm.chern-weil)　·　第 1 页 [nodes/thm.chern-weil.md](./thm.chern-weil.md)

## 陈述（续）
设 $E \to B$ 是光滑流形上的秩 $k$ 复向量丛，$P$ 是 $\mathfrak{gl}(k,\mathbb{C})$ 上的 $m$ 次不变多项式，$\nabla$ 是 $E$ 上任意一个联络，$F_{\nabla} \in \Omega^{2}(B; \operatorname{End}E)$ 是它的曲率。则：
1. $P(F_{\nabla})$ 是**闭**的 $2m$-形式（$\mathrm{d}\,P(F_{\nabla}) = 0$）；
2. 它的上同调类

$$[\,P(F_{\nabla})\,] \in H^{2m}_{dR}(B; \mathbb{C})$$
**与联络无关**：若 $\nabla_{0}, \nabla_{1}$ 是两个联络，则 $[P(F_{\nabla_{0}})] = [P(F_{\nabla_{1}})]$。

于是得到**陈–Weil 同态**
$$w_{P} : \{E \to B\ \text{上的联络}\} \longrightarrow H^{2m}(B), \qquad \nabla \longmapsto [P(F_{\nabla})],$$
它其实只依赖丛 $E$（不依赖联络），且对拉回自然。

> 续见 [nodes/thm.chern-weil.3.md](./thm.chern-weil.3.md)
