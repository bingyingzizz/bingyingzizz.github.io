# 约化同调　`def.reduced-homology`　·　续页（第 2 页）
[在星图里打开](../#n=def.reduced-homology)　·　第 1 页 [nodes/def.reduced-homology.md](./def.reduced-homology.md)

## 陈述（续）
由于 $\partial_{1}\sigma = \sigma \circ d_{1} - \sigma \circ d_{0}$ 的两个系数一正一负，有 $\varepsilon \circ \partial_{1} = 0$，于是可以把它接在 $0$-链后面，得到**增广链复形**
$$S_{1}(X) \xrightarrow{\ \partial\ } S_{0}(X) \xrightarrow{\ \varepsilon\ } \mathbb{Z} \to 0$$

（左边继续接 $S_{2}, S_{3}, \ldots$）。**约化同调**定义为这个延长后复形的同调：
$$\tilde{H}_{p}(X) := H_{p}(X) \quad (p \ge 1),$$
$$\tilde{H}_{0}(X) := \ker\varepsilon \big/ \operatorname{im}\partial_{1}.$$

> 续见 [nodes/def.reduced-homology.3.md](./def.reduced-homology.3.md)
