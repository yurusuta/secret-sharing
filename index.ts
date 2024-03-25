import { split, combine } from "shamirs-secret-sharing-ts";

const SECRET_KEY = "secret key";

const secret = Buffer.from(SECRET_KEY);

// 秘密分散（2つのシェアで複合可能なシェアを10個作成）
const shares = split(secret, { shares: 10, threshold: 2 }).map((share) =>
  share.toString("hex")
);
console.log("shares:", shares);

// 復号
const recovered = combine(
  shares.slice(3, 5).map((share) => Buffer.from(share, "hex"))
);
console.log(recovered.toString());
