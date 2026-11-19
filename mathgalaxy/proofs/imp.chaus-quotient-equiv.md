# imp.chaus-quotient-equiv
`imp.chaus-quotient-equiv` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.quotient-topology` 商拓扑 + `def.closed-set` 闭集与闭包 + `def.hausdorff` Hausdorff 空间 → `prop.chaus-quotient-equiv` 紧 Hausdorff 上商映射的四种说法

**证明（四步）。**
**(1) $\implies$ (2)**：$\pi$ 是某对平行映射的余等化子（紧 Hausdorff 的商仍紧 Hausdorff），故是正则满态射。
**(2) $\implies$ (3)**：正则满态射必是满态射。
**(3) $\implies$ (4)**：设 $\pi : S \to T$ 是满态射。$S$ 紧 $\implies$ $\pi(S)$ 紧；$T$ Hausdorff $\implies$ $\pi(S)$ 闭。若 $\pi(S)\ne T$，取 $y\in T\setminus\pi(S)$。令 $Z=\{0,1\}$ 为 Sierpiński 空间（开集 $\emptyset,\{1\},\{0,1\}$）。定义 $f:T\to Z$ 为 $f(y)=0$、$f(T\setminus\{y\})=1$；则 $f$ 连续（$f^{-1}(\{1\})=T\setminus\{y\}$ 开）。令 $g:T\to Z$ 为常值 $1$。因 $\pi(S)\subseteq T\setminus\{y\}$，有 $f\circ\pi=g\circ\pi$，但 $f\ne g$，与 $\p

> 续见 proofs/imp.chaus-quotient-equiv.2.md
