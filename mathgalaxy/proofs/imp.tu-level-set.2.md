# 隐函数定理 $\implies$ 正则水平集是流形
`imp.tu-level-set` · 推出 · strong 边 · 根 `../`

`thm.implicit-function` 隐函数定理 + `def.smooth-manifold` 光滑流形 → `thm.regular-level-set` 正则水平集定理

**切空间。** 若 $\gamma$ 是 $M$ 里的曲线，则 $F\circ\gamma\equiv c$，求导得 $\mathrm{d}F_{p}\bigl(\gamma'(0)\bigr) = 0$，故 $T_{p}M\subseteq\ker\mathrm{d}F_{p}$。反过来，上面的卡给出 $\dim T_{p}M = n-m$，而秩定理给出 $\dim\ker\mathrm{d}F_{p} = n-m$，故两者相等。∎

⭐ 这条的每一块都是已有的东西：隐函数定理出图，图出卡，卡出流形，求导出切空间。
