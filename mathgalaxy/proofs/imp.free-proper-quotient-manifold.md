# imp.free-proper-quotient-manifold
`imp.free-proper-quotient-manifold` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `def.smooth-manifold` 光滑流形 + `def.topological-manifold` 拓扑流形 + `def.manifold-chart` 图卡 → `lem.free-proper-quotient-manifold` 自由真不连续作用的光滑商

**开邻域**：对每个 $x\in M$，因 $\Gamma$ 有限且自由，对每个 $g\ne e$ 有 $gx\ne x$。由 $M$ Hausdorff，取 $x$ 与 $gx$ 的互不相交开邻域；对有限多个 $g$ 取交并回拉，得到 $x$ 的开邻域 $U$ 使 $gU\cap U=\emptyset$（$g\ne e$）。

**局部单射与开映射**：若 $u,v\in U$ 且 $\pi(u)=\pi(v)$，则 $v=gu$，故 $u\in U\cap g^{-1}U$；由 $gU\cap U=\emptyset$（$g\ne e$）得 $g=e$，$u=v$。所以 $\pi|_{U}$ 是单射；又群作用的商映射是开映射，故 $\pi|_{U}:U\to\pi(U)$ 是同胚。

> 续见 proofs/imp.free-proper-quotient-manifold.2.md
