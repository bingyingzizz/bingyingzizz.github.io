# Mayer–Vietoris（同调）　`thm.mv-homology`　·　续页（第 2 页）
[在星图里打开](../#n=thm.mv-homology)　·　第 1 页 [nodes/thm.mv-homology.md](./thm.mv-homology.md)

## 陈述（续）
$$H_{p}(U \cap V) \to H_{p}(U) \oplus H_{p}(V) \to H_{p}(X)$$
$$\xrightarrow{\ \partial_{*}\ } H_{p-1}(U \cap V)$$
（两端各再向左右无限延伸成 $\cdots$）。其中两个不明显的映射是

$$\Phi[z] := (i_{*}[z],\ -j_{*}[z]),\qquad \Psi[a, b] := [a + b].$$
把 $H$ 换成约化同调 $\tilde{H}$，只要 $U \cap V \ne \emptyset$，同样的序列照样成立（否则 $\tilde{H}_{0}$ 那段不正合：$X = \{a, b\}$、$U = \{a\}$、$V = \{b\}$ 时 $\tilde{H}_{0}(U) = \
tilde{H}_{0}(V) = 0$ 而 $\tilde{H}_{0}(X) = \mathbb{Z}$）。

> 续见 [nodes/thm.mv-homology.3.md](./thm.mv-homology.3.md)
