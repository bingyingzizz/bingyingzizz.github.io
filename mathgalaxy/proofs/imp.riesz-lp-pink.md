# 配对框架到 $L^p$ 版 Riesz 表示（组织性回头边）
`imp.riesz-lp-pink` · 推出 · strong 边 · 根 `../`

`thm.riesz-perfect-pairing` Riesz 表示的配对版 → `thm.riesz-representation-lp` Riesz 表示定理

**组织性说明（非推导）。** `thm.riesz-perfect-pairing` 把 $(L^{p},L^{q})$ 列为完美配对实例：三条公理由 Hölder 与对偶刻画验证。
它**不**推出 $(L^{p})^{*}\cong L^{q}$；满射性由 `thm.riesz-representation-lp` 用 Radon–Nikodym 独立证明。
因此这条边表达「框架到实例」的回头关系（便于从框架跳到具体定理），不是从完美配对的三条公理单独推出满射，故 `layer: false`。

> 组织性回头边：配对定理只给框架；满射性仍由 Radon–Nikodym / 对偶刻画给出，不是从完美配对的三条公理单独推出。
