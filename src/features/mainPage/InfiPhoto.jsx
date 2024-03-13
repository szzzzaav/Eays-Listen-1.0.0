import useInfiGsap from "../../hooks/useInfiGsap";
import {
  StyledContainer,
  StyledPhoto,
  StyledPhotoLine,
  StyledPhotos,
} from "../../ui/InfiPhoto";
import SolarSpinner from "../../ui/SolarSpinner";
import useNewMusic from "./useNewMusic";

function InfiPhoto() {
  useInfiGsap();
  const { data } = useNewMusic();
  return (
    <StyledContainer>
      <StyledPhotos className="photos">
        {Array.from({ length: 4 }).map((_, rowId) => (
          <StyledPhotoLine className="photos_line" key={rowId + "photo_line"}>
            {Array.from({ length: 7 }).map((_, colId) => (
              <StyledPhoto
                className="photos_line_photo"
                key={rowId * 4 + colId}
              >
                {!data?.[rowId * 7 + colId]?.cover ? (
                  <SolarSpinner />
                ) : (
                  <div
                    style={{
                      backgroundImage: `url(${
                        data?.[rowId * 7 + colId]?.cover || "/photos/photo.png"
                      })`,
                    }}
                  ></div>
                )}
              </StyledPhoto>
            ))}
          </StyledPhotoLine>
        ))}
      </StyledPhotos>
    </StyledContainer>
  );
}

export default InfiPhoto;
