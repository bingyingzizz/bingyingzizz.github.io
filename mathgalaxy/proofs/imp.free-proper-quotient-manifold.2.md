# imp.free-proper-quotient-manifold
`imp.free-proper-quotient-manifold` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `def.smooth-manifold` 光滑流形 + `def.topological-manifold` 拓扑流形 + `def.manifold-chart` 图卡 → `lem.free-proper-quotient-manifold` 自由真不连续作用的光滑商

**图册**：取 $M$ 的图卡 $(U,\varphi)$ 且 $U$ 满足上条；定义 $M/\Gamma$ 上的卡 $(\pi(U),\varphi\circ(\pi|_{U})^{-1})$。这些 $\pi(U)$ 覆盖 $M/\Gamma$。若 $\pi(z)\in\pi(U)\cap\pi(V)$，取 $h\in\Gamma$ 使 $hz\in V$；在 $z$ 附近 $\pi|_{V}^{-1}\circ\pi=h$（因为 $\pi\circ h=\pi$，且 $hu\in V$ 对 $u$ 靠近 $z$ 成立），故转移映射局部等于 $\psi\circ h\circ\varphi^{-1}$，是光滑的。

**拓扑条件**：$M/\Gamma$ 作为第二可数空间 $M$ 的商仍第二可数；又 $\Gamma$ 有限且作用真不连续，不同轨道的饱和邻域可分离（对有限多个 $g$ 取 $gx$ 与 $\Gamma y$ 的分离邻域），故 $M/\Gamma$ Hausdorff。

> 续见 proofs/imp.free-proper-quotient-manifold.3.md
