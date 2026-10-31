# 三角形上的积分为零 $\implies$ 任意闭曲线上的积分为零
`imp.goursat` · 推出 · strong 边 · 根 `../`

`lem.goursat-triangle` Goursat 三角形引理 → `thm.cauchy-goursat` Cauchy–Goursat 积分定理

**单连通用在哪里。** 上面每一步都要求「$\gamma$ 围成的内部在 $\Omega$ 内」—— 这正是「$\Omega$ 内每条闭曲线都同伦于一点」的等价表述。否则某个三角形可能跨出 $\Omega$，引理用不上（$1/z$ 在 $\mathbb{C} \setminus \{0\}$ 上就是这种情况）。

**多连通版。** 把外边界与各内圈用割线连成一条闭曲线（见上一条边），在它上面用刚证的单连通结论。$\blacksquare$
