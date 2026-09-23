# 选择公理 $\iff$ 良序定理
`eq.ac-wo` · 等价 · strong 边 · 根 `../`

`ax.choice` 选择公理 → `thm.wellordering` 良序定理

3. **过程一定会停**：取 $X$ 的 **Hartogs 数** $\aleph (X)$，即最小的不能单射进 $X$ 的序数（见「Hartogs 定理」——它在 ZF 里就能证，不需要 AC）。若对一切 $\alpha < \aleph (X)$ 过程都没停，则 $\alpha \mapsto x(\alpha )$ 就是 $\aleph (X)$ 到 $X$ 的单射，与 $\aleph (X)$ 的定义矛盾。故存在序数 $\gamma$ 使 $x : \gamma \to X$ 是双射。

4. 把 $\gamma$ 上的序经 $x$ 搬到 $X$ 上：

$$a \preceq b :\iff x^{-1}(a) \le x^{-1}(b)$$

因为序数在 $\in$／$\le$ 下是良序的，$X$ 上这个序也是良序。∎

**良序定理 ⇒ 选择公理（路线 4⟹1）**

设 $F$ 是一族非空集合（即 $\emptyset \notin F$）。

1. 由良序定理，取 $U = \bigcup F$ 的一个良序 $\preceq$。

> 续见 proofs/eq.ac-wo.3.md
