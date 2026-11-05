# 约化同调　`def.reduced-homology`　·　说明
根 `../`

**为什么要有它**：单点 $\{p\}$ 的 $H_{0} = \mathbb{Z}$ —— 一个点看起来「有一个洞」。用约化同调，单点的**全部**约化同调都是 $0$，于是「$S^{n}$ 只有一个非平凡同调」这类陈述才干净（`thm.sphere-homology`）。

**与普通同调的关系**：$X \ne \emptyset$ 时，$\varepsilon$ 是满射（任取一点 $x$，$\varepsilon(x) = 1$），由商群的短正合列 $0 \to \ker\varepsilon \to S_{0} \to \mathbb{Z} \to 0$ 与同调的长正合列，得

$$H_{0}(X) \cong \tilde{H}_{0}(X) \oplus \mathbb{Z}.$$

高维没有这个差别：$\tilde{H}_{p} = H_{p}$ 对 $p \ge 1$。

**「增广」的几何意义**：$\varepsilon$ 取出的是一条 $0$-链的总系数（「净点数」）。商掉它相当于**去掉 $H_{0}$ 里一个 $\mathbb{Z}$ 直和因子**（不是把空间压成一个点：$\tilde{H}_{1}(S^{1}) = \mathbb{Z}$，而单点的 $H_{1} = 0$）。这也解释了为什么单点的约化同调全为零。

> 续见 notes/def.reduced-homology.2.md
