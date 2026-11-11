# 映射的度　`def.degree`　·　说明
根 `../`

**良定义的理由。** 由 `thm.sphere-homology`，约化同调 $\tilde{H}_{n-1}(S^{n-1}; \mathbb{Z}) \cong \mathbb{Z}$ 是秩 $1$ 的自由阿贝尔群（`def.reduced-homology`）；连续映射 $f$ 诱导同态 $f_{*} : \tilde{H}_{n-1}(S^{n-1}) \to \tilde{H}_{n-1}(S^{n-1})$（`def.singular-homology`），而 $\mathbb{Z} \to \mathbb{Z}$ 的群同态必是「乘某个整数」，它在生成元上的取值就是 $d$。

**为什么必须钉定向。** 生成元只有两个：$[S^{n-1}]$ 与 $-[S^{n-1}]$，换一个 $d$ 就变号。所以严格说度是「相对于某个定向」的整数；本图提到度时默认 $S^{n-1} \subset \mathbb{R}^{n}$ 的标准定向（外法向在前），此时 $\deg$ 才是确定的数。不做约定时只有 $|\deg f|$ 无歧义。

**同伦不变性。** 同伦的映射诱导同一个同调同态（`thm.homotopy-invariance`），故 $\deg$ 只依赖 $f$ 的同伦类。反过来一般**不**成立：度是同伦不变量、不是完全不变量（$n = 2$ 时恰好也是完全的 —— $S^{1} \to S^{1}$ 的同伦类由绕数唯一确定）。

> 续见 notes/def.degree.2.md
