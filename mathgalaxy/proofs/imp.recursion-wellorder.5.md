# 良序性 $\implies$ 递归定理
`imp.recursion-wellorder` · 推出 · strong 边 · 根 `../`

`def.wellorder` 良序集 + `ax.repl` 替换公理模式 + `ax.sep` 分离公理模式 → `thm.recursion-wellorder` 超限递归

**③ $R$ 的定义域是整个 $W$。** 反设不然，取最小的 $w \notin \operatorname{dom}\, R$。

则 $W_{< w} \subseteq \operatorname{dom}\, R$，于是 $f := R \upharpoonright W_{< w}$ 是 $W_{< w}$ 上满足递归式的函数（若 $v \prec w$，由 $v \in \operatorname{dom}\, R$ 及单值性得 $f(v) = G(f \upharpoonright W_{< v})$）。

于是 $(w, G(f)) \in R$，与 $w \notin \operatorname{dom}\, R$ 矛盾。

故 $R$ 就是所求的函数 $F$，由 ① 唯一。

> 续见 proofs/imp.recursion-wellorder.6.md
