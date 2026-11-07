# 良序性 $\implies$ 递归定理
`imp.recursion-wellorder` · 推出 · strong 边 · 根 `../`

`def.wellorder` 良序集 + `ax.repl` 替换公理模式 + `ax.sep` 分离公理模式 → `thm.recursion-wellorder` 超限递归

**$R$ 是集合。** 对固定 $w$ 考察公式 $\varphi(w, y)$：「存在 $f$ 定义在 $W_{< w}$ 上、满足递归式，且 $y = G(f)$」。先用分离公理模式把 $W$ 缩到 $W^{\prime} = \{w \in W : \exists y\,\varphi(w, y)\}$，再对 $W^{\prime}$ 用**替换公理模式**（$\varphi$ 在 $W^{\prime}$ 上单值，正是 ① 保证的）得 $Y = \{y : \exists w \in W,\ (w, y) \in R\}$ 是集合 —— 这一步**不需要**「$G$ 的值域」是集合（$G$ 可以是真类函数，它的

> 续见 proofs/imp.recursion-wellorder.4.md
